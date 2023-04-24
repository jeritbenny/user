const express = require('express')
const app= express()

app.use(express.json())

const mongoose = require('mongoose')

const product = require('./db.js')

app.listen(5000,(req,res)=>{
    console.log('connected to port 5000');
})

mongoose.connect('mongodb://localhost:27017/Details').then(()=>{
    console.log('connected to mongoDB');
})

app.get('/data', async(req,res)=>{
    try{
        const data = await product.find({});
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

