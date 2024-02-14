const MyInfo = require("../models/MyInfoModel")

exports.insertInfo= async(req,res)=>{
    const filter = { homeTitle: 'Senior Software Engineer | Web Developer'};
const update = req.body;
    await MyInfo.findOneAndUpdate(filter, update,  { upsert:true,new: true }).then(result=>{
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