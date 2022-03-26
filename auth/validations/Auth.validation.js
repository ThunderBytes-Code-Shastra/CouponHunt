const Joi = require("joi");

const loginSchema = Joi.object({
  username: Joi.string()
    .trim()
    .pattern(/^[a-zA-Z0-9_@\.\-]+$/)
    .required(),
  password: Joi.string()
    .trim()
    .pattern(/^[a-zA-Z0-9!@#%^&*+-=]{6,15}$/)
    .required(),
});

const registerSchema = Joi.object({
  name: Joi.string().trim().required(),
  username: Joi.string()
    .trim()
    .pattern(/^[a-zA-Z0-9_@\.\-]+$/)
    .required(),
  password: Joi.string()
    .trim()
    .pattern(/^[a-zA-Z0-9!@#%^&*+-=]{6,15}$/)
    .required(),
});

module.exports = {
  loginSchema,
  registerSchema,
};
