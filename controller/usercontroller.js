const User = require('../models/addNewUser')
const { json } = require('express')

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
        res.status(200).json(user)
    }else{
        res.status(400).send({message:'WRONG-PASSWORD'})
    }
}
module.exports={
    postUser,
    getUser
}
