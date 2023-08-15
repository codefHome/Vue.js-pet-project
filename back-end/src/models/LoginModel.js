const { Schema, model } = require("mongoose")

const LoginModel= new Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    userName:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
    type:String,
    require:true,
    }
})

const loginInfo=model('loginInfo',LoginModel)
module.exports= loginInfo