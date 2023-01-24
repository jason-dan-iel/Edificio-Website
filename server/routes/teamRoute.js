const express = require('express');
const mongoose = require('mongoose')
const member = require('../models/coreTeam');
const router = express.Router();

router.get('/', async (req, res) => {
    const coreTeam = await member.find();
    res.json(coreTeam);
})

router.post('/', async (req, res) => {
    let newMember = req.body;
    newMember = new member(newMember);

    try{
        newMember = await newMember.save()
        res.json(newMember);
    }catch(error){
        console.log(error);
    }
})


module.exports = router