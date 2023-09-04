const mongoose = require('mongoose')

const CandSch = mongoose.Schema({
    Name:String,
    Role:String,
    Vote:Number
})

const CandidateList = mongoose.model("CandidateList",CandSch)
module.exports = CandidateList