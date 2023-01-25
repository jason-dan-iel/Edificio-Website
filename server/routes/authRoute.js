const express = require('express');
const router = express.Router()
const { validateLogin, validateRegistration } = require('../middleware/validateLogin')
const { registrationValidation } = require('../helpers/validation');
const User = require('../models/UserModel')

// writing the logic for login
router.post('/login', async(req, res) =>{
    const username = req.body.username;
    const user = await User.findOne({username: username})
    if(!user) res.status(400).json({message: "The user doesn't exist"})
})


router.post('/register', async (req, res) => {
    try {
        const result = await registrationValidation.validateAsync(req.body);
        res.json(result);
    }catch(error){
        res.json(error);
    }
})

router.get('/register', (req, res) => {
    res.send("this is working for registration")
})
module.exports = router;