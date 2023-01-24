const mongoose = require('mongoose')

const sponsorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    level: {
        type: Number,
        required: true,
    },

    type: {
        type: String,
        required: true,
    }
})

module.exports = sponsorSchema