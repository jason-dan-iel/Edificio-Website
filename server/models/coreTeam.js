const mongoose = require('mongoose')

const teamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    instagramLink: String,
    linkedInLink: String

})

module.exports = mongoose.model('Member', teamSchema);