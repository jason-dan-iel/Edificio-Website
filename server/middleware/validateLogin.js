const express = require('express');
const {loginValidation, registrationValidation} = require('../helpers/validation');

const validateLogin = async (req, res, next) => {
    const userInfo = req.body;
    const result = await loginValidation.validateAsync(req.body);

    console.log('This is coming from the middleware');

}

const validateRegistration = async (req, res, next) =>{
    const userInfor = req.body;
    const result = registrationValidation.validateAsync(req.body);

    console.log(result);
}

module.exports = {
    validateLogin,
    validateRegistration
}