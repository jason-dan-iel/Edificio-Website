const express = require('express');
const mongoose = require('mongoose')
const member = require('../models/coreTeam');
const router = express.Router();
const {addTeamMember, getTeamMembers} = require('../middleware/addTeamMember');

router.get('/', getTeamMembers);
router.post('/', addTeamMember); 
router.put('/', )

module.exports = router