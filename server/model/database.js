const mongoose = require('mongoose')
const votingSch = mongoose.Schema({
    Name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
    },
    USN: {
        type: String,
        unique: true
    },
    Candidate: {
        type: String,
        require: true
    },
    President: {
        type: String,
        require: true
    },
    Vice_President: {
        type: String,
        require: true
    },
    Secretary: {
        type: String,
        require: true
    },
    Joint_Secretary: {
        type: String,
        require: true
    },
    Treasurer:{
        type: String,
        require: true
    }

})

const Voting = mongoose.model('Voting', votingSch)
module.exports = Voting