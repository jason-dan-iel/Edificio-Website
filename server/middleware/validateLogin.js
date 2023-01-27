const {loginValidation, registrationValidation} = require('../helpers/validation');
const UserModel = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const validateLogin = async (req, res, next) => {
    const userInfo = req.body;
    const {error} = await loginValidation.validateAsync(req.body);
    if(error) res.status(400).json(error.details[0].message);

    next();
}

const checkUsername = async (req, res, next) => {
    const username = req.body.username;
    const user = UserModel.findOne({username: username});
    if(!user) res.status(400).json({message: "The user doesn't exist"});

    next();
}

const verifyUser = async(req, res, next) => {
    const password = req.body.passowrd;
    const user = UserModel.findOne({username: req.body.username})
    const result = bcrypt.compare(password, user.password)

    if(!result) res.status(400).json({message: "The password is incorrect"});

    next();
}

const addToken = async (req, res, next) => {
    const token = jwt.sing({username: req.body.username}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
}


module.exports = {
    validateLogin,
    checkUsername,
    verifyUser, 
    addToken
}