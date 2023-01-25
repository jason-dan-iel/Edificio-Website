const express = require('express');
const router = express.Router()
const {validateLogin} = require('../middleware/validateLogin')

router.route('/login').get(validateLogin, (req, res)=>{
    res.json('this is the main route')
})