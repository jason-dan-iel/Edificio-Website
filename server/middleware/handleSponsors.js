const SponsorsModel = require("../models/SponsorsModel")

const getSponsors = async (req, res)=>{
    const Sponsor = await SponsorsModel.find()
    res.json(Sponsor);
}

const addSponsor = async (req, res)=>{
    const sponsor = req.body;
    const newSponsor = new SponsorsModel(sponsor);

    try{
        await newSponsor.save();
        res.status(201).json(newSponsor);
    }catch(error){
        res.status(400).json(error.message);
    }
}


module.exports = {
    addSponsor,
    getSponsors
}