const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    college: {
        type: String,
        required: true
    },

    teamCaptain: {
        type: Boolean,
        default: false,
    },

    teamId: {
        type: String,
        default: null
    }
})

module.exports = mongoose.model('User', UserSchema);