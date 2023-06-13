const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    name:{
        type:String
    },
    adres:{
        type:String
    }
})
module.exports=mongoose.model('userModel',userSchema)