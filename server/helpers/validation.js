const Joi = require('joi');

const registrationValidation = Joi.object({
    name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required().min(6),
    email: Joi.string().required().email()
})

const loginValidation = Joi.object({
    username: Joi.string().required,
    password: Joi.string().required,
})

module.exports = {
    registrationValidation,
    loginValidation
}