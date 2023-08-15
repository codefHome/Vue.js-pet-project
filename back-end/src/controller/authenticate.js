const loginInfo = require("../models/LoginModel")
const jwt = require('jsonwebtoken')
exports.register=async(req,res)=>{
   await loginInfo.create(req.body).then(response=>{
    res.status(200).json(req.body);
   }).catch(err=>{
    if(err.code === 11000){
res.json({error:true,
message:'The username is already taken'})
    }else{
        res.status(500).json({message:err.message})
    }
   })
}


exports.login=async(req,res)=>{
await loginInfo.findOne({userName:req.body.userName}).then(response=>{
    if(response){
        if(response.password === req.body.password){
            const accessToken= jwt.sign({userName:req.body.userName},'secret_key',{expiresIn:'2h'})

       res.status(201).json({message:'success',accessToken:accessToken})
      
        }
        }else{
         res.json({message:'There is no such username'})
        }
    }).catch(err=>{
        res.status(500).json(err)
        return err
    })

   
}