const Member = require('../models/coreTeam');

const addTeamMember = async(req, res, next) => {
    const teamMember = req.body;

    // implementing the updating of Team Member
    let member = Member.findOne({email: teamMember.email});
    if(member){
        Member.updateOne({email: teamMember.email}, teamMember);
        res.status(201).json(teamMember);
    }

    // otherwise making new member
    const newMember = new Member(teamMember);

    try{
        await newMember.save();
        res.status(201).json(newMember);
    }catch(error){
        res.json(error.message);
    }
    
}

const getTeamMembers = async(req, res, next)=>{
    const teamMember = await Member.find();
    res.json(teamMember);
}



module.exports = {
    getTeamMembers,
    addTeamMember
};