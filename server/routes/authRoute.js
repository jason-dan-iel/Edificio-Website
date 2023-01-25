const express = require('express');
const router = express.Router()
const {validateLogin, validateRegistration} = require('../middleware/validateLogin')

router.route('/login').post(validateLogin, (req, res)=>{
    res.json('this is the main route')
})

router.route('/register').post(validateRegistration, (req, res) =>{
})

module.exports = router;