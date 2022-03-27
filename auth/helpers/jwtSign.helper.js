const jsonwebtoken = require("jsonwebtoken");

const expiresIn = process.env.EXPIRATION_TIME;

const signJWT = async (payload) => {
  return new Promise((resolve, reject) => {
    if (payload?.userId) {
      jsonwebtoken.sign(
        payload,
        process.env.PRIVATE_KEY,
        { expiresIn: expiresIn },
        (error, signedToken) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(signedToken);
          return;
        }
      );
    } else reject("Payload not provided");
  });
};

module.exports = {
  signJWT,
};
