const express = require('express');
const router = express.Router()
const { validateLogin, validateRegistration } = require('../middleware/validateLogin')
const { registrationValidation } = require('../helpers/validation');

router.route('/login').post((req, res) => {
    res.json('this is the main route')
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