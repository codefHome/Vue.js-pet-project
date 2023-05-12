const MyMail = require("../models/MyInformation")

exports.deleteDocument=async(req,res)=>{
  await  MyMail.deleteMany().then(response=>{
    res.status(200).json({message:'All document deleted'})
  }).catch(err=>{
    res.status(500).json({err})
  })
}