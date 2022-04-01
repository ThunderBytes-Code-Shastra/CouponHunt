const jsonwebtoken = require("jsonwebtoken");

const verifyJWT = async (accessToken) => {
  return new Promise((resolve, reject) => {
    if (accessToken)
      jsonwebtoken.verify(
        accessToken,
        process.env.PRIVATE_KEY,
        (error, payload) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(payload);
          return;
        }
      );
    else reject("Access Token not provided");
  });
};

module.exports = {
  verifyJWT,
};
