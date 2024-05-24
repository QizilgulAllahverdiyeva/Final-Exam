const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const {type}= require('os')

app.use(cors())
app.use(express.json())
dotenv.config()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const {Schema}= mongoose

const shoesSchema = new Schema({
    img:{
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    }, 
    category: {
        type: String,
        require:true
    },
    price: {
        type: String,
        require: true
    }
})

const Shoes = mongoose.model("Shoes", shoesSchema)

app.post("/shoes", async(req, res)=>{
    try{
        const {img, title, category, price}= req.body
        const newShoes = new Shoes({
            img,
            title,
            category,
            price
        })
        await newShoes.save()
        res.status(201).send(newShoes)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})

app.get("/shoes" , async(req,res)=>{
    try{
        const clothes= await Shoes.find({})
res.status(200).send(clothes)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})

app.delete("/shoes/:id" , async(req,res)=>{
    try{
        const {id}=req.params
        const deleteCloth= await Shoes.findByIdAndDelete(id)
res.status(200).send(deleteCloth)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})

app.get("/shoes/:id" , async(req,res)=>{
    try{
        const {id}=req.params
        const getCloth= await Shoes.findById(id)
res.status(200).send(getCloth)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})

app.put("/shoes/:id" , async(req,res)=>{
    try{
        const {id}=req.params
        const {img, title, category, price}= req.body
        const clothUpdate= await Shoes.findByIdAndUpdate(id,{
            img, 
            title, 
            category, 
            price
        })
res.status(200).send(clothUpdate)
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
})

const PORT= process.env.PORT
const DB= process.env.DB_URL

app.listen(PORT, console.log("Port is active", PORT))
mongoose.connect(DB)
  .then(() => console.log('Connected!'));