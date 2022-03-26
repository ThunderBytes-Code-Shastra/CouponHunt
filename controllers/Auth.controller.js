const User = require("../models/User.model");
const createHttpError = require("http-errors");
const ipInfo = require("ip-info-finder");

const { signJWT } = require("../helpers/jwtSign.helper");
const { verifyJWT } = require("../helpers/jwtVerify.helper");
const {
  registerSchema,
  loginSchema,
} = require("../validations/Auth.validation");
const bcrypt = require("bcrypt");

const maxAge = process.env.EXPIRATION_TIME;

//cookie options
const cookieOptions = {
  httpOnly: true,
  maxAge: maxAge,
  signed: true,
};

const register = async (req, res, next) => {
  try {
    let result = await registerSchema.validateAsync(req.body);

    const existingUser = await User.findOne({ username: result.username });

    if (existingUser) {
      throw createHttpError.Conflict(
        `${result.username} is already been registered`
      );
    }

    const salt = await bcrypt.genSalt(10);
    result["password"] = await bcrypt.hash(result.password, salt);

    const avatar = `https://ui-avatars.com/api/?background=random&name=${result.name}`;

    const user = new User({ ...result, avatar });
    let savedUser = await user.save();

    const accessToken = await signJWT({ userId: savedUser._id });

    // removing secret data
    savedUser = savedUser.toObject();
    delete savedUser.password;
    delete savedUser._id;

    return res.status(201).json({
      message: "Registered successfully",
      user: savedUser,
      accessToken,
    });
  } catch (err) {
    if (err.isJoi === true) {
      console.log(err);
      return next(createHttpError.UnprocessableEntity("Invalid Credentials"));
    }

    // mongoDB duplicate error
    if (err.code === 11000) {
      return next(createHttpError.Conflict(err.name));
    }

    next(err);
  }
};

const viewAccount = async (req, res, next) => {
  try {
    const decoded = await verifyJWT(req.headers.authorization);

    let user = await User.findById(decoded.userId);

    if (!user) createHttpError.NotFound("User not registered");

    // removing secret data
    user = user.toObject();
    delete user.password;
    delete user._id;

    res.status(200).json({ user });
  } catch (err) {
    next(createHttpError.Unauthorized());
  }
};

const login = async (req, res, next) => {
  try {
    const result = await loginSchema.validateAsync(req.body);

    let user = await User.findOne({ username: result.username });

    if (!user) throw createHttpError.NotFound("User not registerd");

    const isMatch = await bcrypt.compare(result.password, user.password);

    if (!isMatch)
      throw createHttpError.Unauthorized("Username/Password not valid");

    const accessToken = await signJWT({ userId: user._id });

    // removing secret data
    user = user.toObject();
    delete user.password;
    delete user._id;

    return res.status(200).json({
      message: "Login successfully",
      user,
      accessToken,
    });
  } catch (err) {
    if (err.isJoi === true)
      return next(
        createHttpError.UnprocessableEntity("Invalid Username/Password")
      );

    next(err);
  }
};

const authorization = async (req, res, next) => {
  try {
    const decoded = await verifyJWT(req.headers.authorization);

    if (!decoded?.userId) throw createHttpError.Unauthorized();

    res.status(200).json({
      authorize: true,
      uid: decoded.userId,
    });
  } catch (err) {
    console.log({ err });
    next(createHttpError.Unauthorized());
  }
};

module.exports = {
  register,
  viewAccount,
  login,
  authorization,
};
