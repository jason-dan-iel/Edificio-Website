const SponsorsModel = require("../models/SponsorsModel")

const getSponsors = async (req, res)=>{
    const Sponsor = await SponsorsModel.find()
    res.json(Sponsor);
}