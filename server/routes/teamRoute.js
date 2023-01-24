const express = require('express');
const team = require('../models/coreTeam.js');
const router = express.Router();

router.get('/', async (req, res) => {
    const coreTeam = await team.find();
    res.json(coreTeam);
})

router.post('/', async (req, res) => {
    const member = req.body;
    const newMember = team(member);

    await newMember.save()
})