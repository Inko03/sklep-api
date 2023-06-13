const User = require('../models/addNewUser')
const { json } = require('express')
const jwt = require('jsonwebtoken')

const authenticationToken = (req,res,next)=>{

const authHeader = req.headers['authorization']
const token = authHeader && authHeader.split(' ')[1]

if(token==null) return res.status(401)

jwt.verify(token,process.env.ACCES_TOKEN,(err,userValid)=>{
    if(err)return res.status(403).json({message:"TOKEN_EXPIRE"})
    req.user = userValid
    next()
})
}
const postUser = async(req,res)=>{
    const user = await User.find({email:req.body.email})
    const isuser = user.length
    if(isuser===1){
        res.status(400).json({message:"USER-EXIST"})
    }else{
        const newuser = await User.create({
            email:req.body.email,
            password:req.body.password
        })
        res.status(200).json({message:"NEW-USER-ADD"})
    }
}
const getUser = async(req,res)=>{
    const user = await User.find({email:req.body.email})
    const isUser = user.length
    if(isUser===0){
        res.status(400).json({message:'NO-USER'})
    }else if(user[0].password===req.body.password){
        const userValid = {name:user[0].name,email:user[0].email,adres:user[0].adres}
        const accesToken = jwt.sign(userValid,process.env.ACCES_TOKEN,{expiresIn:'10m'})
        res.status(200).json({accesToken:accesToken})
    }else{
        res.status(400).send({message:'WRONG-PASSWORD'})
    }
}
const showUser =  async(req,res)=>{
res.json({name:req.user.name,email:req.user.email,adres:req.user.adres})
}

const editUser = async(req,res)=>{
    const email = req.body.email
    const updates = req.body.newdata
    const type = req.body.type
    console.log(email)
    if(!type){
        res.status(400).json({message:"NO-TYPE-EDIT"})
    }else if(!email){
        res.status(400).json({message:"NO-EMAIL"})
    }else if(!updates){
        res.status(400).json({message:"NO-UPDATE-VALUE"})
    }else{
        if(type==="email"){
            const one = {email:email}
            const two = {email:updates}
            const update = await User.updateOne(one,two)
            res.status(200).json(user)
        }else if(type==="name"){
            const one = {email:email}
            const two = {name:updates}
            const update = await User.updateOne(one,two)
            res.status(200).json({message:'UPDATE-NAME'})
        }else if(type==="adres"){
            const one = {email:email}
            const two = {adres:updates}
            const update = await User.updateOne(one,two)
            res.status(200).json({message:'UPDATE-ADRES'})
        }
    }
}
module.exports={
    postUser,
    getUser,
    showUser,
    authenticationToken,
    editUser
}