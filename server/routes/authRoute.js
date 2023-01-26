const express = require('express');
const router = express.Router()
const { validateLogin, validateRegistration } = require('../middleware/validateLogin')
const { registrationValidation } = require('../helpers/validation');
const User = require('../models/UserModel')
const bcrypt = require('bcryptjs');

// writing the logic for login
router.post('/login', async(req, res) =>{

    // checking for valid entries 
    try {
        const result = registrationValidation.validateAsync(req.body);
        res.json.status(200).json(result)    
    } catch (error) {
        res.json(error);
    }

    // checking for existing user
    const username = req.body.username;
    const user = await User.findOne({username: username})
    if(!user) res.status(400).json({message: "The user doesn't exist"})
})


// writing the logic for register 
router.post('/register', async (req, res) => {

    // checking for valid data types
    try {
        const result = await registrationValidation.validateAsync(req.body);
        res.json(result);
    }catch(error){
        res.json(error);
    }

    // checking for existing email or username
    const username = req.body.username;
    const email = req.body.email;

    // checking for existing users
    const checkUsername = User.findOne({username: username})
    const checkEmail = User.findOne({email: email});

    if(checkUsername) res.status(200).json({message: "The username already exists"})
    if(checkUsername) res.status(200).json({message: "The email already exists"})

    // hashing the password
    const salt = bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(req.body, salt);

    // creatign a nwe user
    const user = new User({
        name : req.body.name,
        username : req.body.username,
        email : req.body.email,
        password: hashedPassword,
    })

    // saving the user
    try{
        const savedUser = await user.save();
        res.status(200).json(savedUser);
    }catch(error){
        res.status(400).json(error);
    }
})



module.exports = router;