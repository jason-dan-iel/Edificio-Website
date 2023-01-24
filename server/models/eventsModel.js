const mongoose = require('mongoose');


// defining the event schema  
const eventSchema = mongoose.Schema({
    name: String,
    type: String,
    date : {
        type: Date,
        default: Date.now(),
        required: true
    },
    venue: String,
    prizeMoney: String,
    teamSize: {
        type: Number,
        default: 1
    }
})

module.exports = eventSchema;