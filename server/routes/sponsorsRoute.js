const express = require('express')
const Sponsor = require('../models/SponsorsModel')
const router = express.Router()

// fetching all the sponsors 
router.route('/').get(async (req, res)=>{
    const sponsors = Sponsor.findOne();
    res.json(sponsors);
})

// fetching all the sponsors by id 


// exporting the route
module.exports = router;