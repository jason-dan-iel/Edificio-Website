const express = require('express');
const {loginValidation} = require('../helpers/validation');

const validateLogin = async (req, res, next) => {
    const userInfo = req.body;
    const result = await loginValidation.validateAsync(req.body);

    console.log('This is coming from the middleware');

}

module.exports = {
    validateLogin
}