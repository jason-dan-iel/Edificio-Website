const User = require('../models/UserModel');


// this is a function to get a unique teamId for each  user
const generateTeamId = (req, res, next) => {
    const givenUser = req.body
    
    // checking if the given user is a captain or not
    if(givenUser.captain == false){
        return;
        next()
    }

    // generating the teamId
    let teamId = Math.random() * 1000
    teamId = Math.floor(teamId).toString();
    teamId = `ED-${teamId}`;

    
    // finding if there is any user with the given TeamId
    const user = User.findOne({teamId: teamId})
    if(!user){
        return teamId;
        next()
    }else{
        generateTeamId();
    }
}


module.exports = generateTeamId;