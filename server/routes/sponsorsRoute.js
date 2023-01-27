const express = require('express')
const router = express.Router()
const { getSponsors, addSponsor } = require('../middleware/handleSponsors')

 
router.get('/', getSponsors)
router.post('/', addSponsor)


// exporting the route
module.exports = router;