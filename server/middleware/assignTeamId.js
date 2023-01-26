const express = require('express');
const generateTeamId = require('../helpers/generateTeamId');


const assignTeamId = (req, res)=>{
    const user = req.body;
    const isTeamCaptain = user.teamCaptain;

    // checking if user is a captain
    if(isTeamCaptain) {
        teamId = generateTeamId();
    }
}