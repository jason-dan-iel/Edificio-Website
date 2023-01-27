const {loginValidation, registrationValidation} = require('../helpers/validation');
const UserModel = require('../models/UserModel');

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

const validateRegistration = async (req, res, next) =>{
    const userInfor = req.body;
    const result = registrationValidation.validateAsync(req.body);

    console.log(result);
}

module.exports = {
    validateLogin,
    checkUsername,
    validateRegistration
}