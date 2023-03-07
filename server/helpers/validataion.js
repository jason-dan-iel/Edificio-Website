const Joi = require("@hapi/joi");

const registrationValidation = data => {
    const schema = {

        name: Joi.string().required(),
        email: Joi.string().email().required(),
        college: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().required().min(6),
    };
    return Joi.validate(data,schema);
};
const loginValidation = data => {
    const schema = {
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6),
    };
    return Joi.validate(data,schema);
};

module.exports.registrationValidation = registrationValidation;
module.exports.loginValidation = loginValidation;
