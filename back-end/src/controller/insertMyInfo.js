const MyInfo = require("../models/MyInfoModel")

exports.insertInfo= async(req,res)=>{
    await MyInfo.insertMany({...req.body}).then(result=>{
        res.status(200).json({...req.body})
    }).catch(err=>{
        res.status(500).json(err)
    })
}

exports.findAllInfo=async(req,res)=>{
 await MyInfo.find().then(result=>{
    res.status(200).json(result)
 }).catch(err=>{
    res.status(500).json(err)
 })
   
}

exports.deleteAllInfo=async(req,res)=>{
    await MyInfo.deleteMany().then(result=>{
        res.status(200).json(result)
    }).catch(err=>{
        res.status(200).json(err)
    })
}