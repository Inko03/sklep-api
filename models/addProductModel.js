const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:{
        type:String,
    },
    img:{
        type:String,
    },
    description:{
        type:String,
    },
    color:{
        type:Array,
    },
    price:{
        type:Number
    },
    size:{
        type:Array
    },
    category:{
        type:String
    }
},{
    timestamps:true
})
module.exports=mongoose.model('addProductModel', productSchema)