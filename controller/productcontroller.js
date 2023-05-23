const Product = require('../models/addProductModel')
const { json } = require('express')

const getProduct = async(req,res)=>{
    const product = await Product.findById(req.params.id)
    res.status(200).send(product)
    console.log(req.params.id)
}

const getAllProduct = async(req,res)=>{
    const product = await Product.find()
    res.status(200).send(product)
}

const postProduct =async(req,res)=>{
    const post = await Product.create({
        name:req.body.name,
        img:req.body.img,
        description:req.body.description,
        color:req.body.color,
        size:req.body.size,
        price:req.body.price,
        category:req.body.category
    })
    res.status(200).json(post)
}
module.exports={
    getProduct,
    postProduct,
    getAllProduct,
}