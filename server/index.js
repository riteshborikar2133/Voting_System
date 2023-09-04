const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const Voting = require('./model/database')
const CandidateList = require('./model/CandidateList')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.ATLAS)
    .then(() => { app.listen(process.env.PORT) })
    .then(() => { console.log(`connected at port:${process.env.PORT}`) })
    .then(console.log("connected to database"))

app.post("/", async (req, res) => {
    const data = req.body
    try {
        let check = data.email.includes("@sbjit.edu.in")
        if (check) {
            const votingdata = Voting(data)
            const resp = await votingdata.save()
            if (resp) {
                res.send({ resp, message: "Vote Recorded" })
            }
        }
        else {
            
        }
    }
    catch (err) {
        res.send({message:"Something went Wrong"})
    }
})

app.get("/", async (req, res) => {
    let votingdata
    try {
        votingdata = await Voting.find()
        if (votingdata) {
            res.status(200).json(votingdata)
        }
    }
    catch (err) {
        console.log(err)
    }
})

app.get('/presi/:Candidate', async (req, res) => {
    const data = req.params.President
    let votingdata
    try {
        votingdata = await Voting.find({ data })
        Count = await Voting.find({ data }).count()
        if (votingdata) {
            res.status(200).json({ votingdata, Count })

        }
    }
    catch (err) {
        console.log(err)
    }
})

app.post('/cand', async (req, res) => {
    const data = req.body
    let ress
    try {
        Cand = CandidateList(data)
        ress = await Cand.save()
        if (ress) {
            res.send(ress)
        }
        else {
            res.send({ message: "Somthing is incorrect" })
        }
    } catch (err) {
        res.send(err)
    }
})

app.get('/list', async (req, res) => {
    let votingdata
    try {
        votingdata = await CandidateList.find()
        if (votingdata) {
            res.status(200).json(votingdata)
        }
    }
    catch (err) {
        console.log(err)
    }
})

app.put('/voteup',async(req,res)=>{
    data =req.body
    let v1,v2,v3,v4,v5
    try{
        v1 = await CandidateList.updateOne(
            {Name : data.President},
            {$inc:{Vote:1}}
        )
        
        v2 = await CandidateList.updateOne(
            {Name : data.Vice_President},
            {$inc:{Vote:1}}
        )
        
        v3 = await CandidateList.updateOne(
            {Name : data.Secretary},
            {$inc:{Vote:1}}
        )
        
        v4 = await CandidateList.updateOne(
            {Name : data.Joint_Secretary},
            {$inc:{Vote:1}}
        )
        
        v5 = await CandidateList.updateOne(
            {Name : data.Treasurer},
            {$inc:{Vote:1}}
        )
        if(v1 && v2 && v3 && v4 && v5){
            res.send(data)
        }
    }
    catch(err){
        console.log(err)
    }
})