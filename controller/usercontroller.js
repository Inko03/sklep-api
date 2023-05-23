const User = require('../models/addNewUser')
const { json } = require('express')

const postUser = async(req,res)=>{
    const user = await User.create({
        email:req.body.email,
        password:req.body.password,
    })
    res.status(200).json(user)
}
const getUser = async(req,res)=>{
    const user = await User.find({email:req.body.email})
    const isUser = user.length
    if(isUser===0){
        res.status(200).json({message:'No such user'})
    }else if(user[0].password===req.body.password){
        res.status(200).json(user)
    }else{
        res.status(400).send({message:'Wrong password'})
    }
}
module.exports={
    postUser,
    getUser
}