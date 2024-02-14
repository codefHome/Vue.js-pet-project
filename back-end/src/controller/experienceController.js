const Experience = require("../models/experienceModel")

exports.addExperience= async(req,res)=>{
    await Experience.insertMany({...req.body}).then(result=>{
        res.status(200).json({...req.body})
    }).catch(err=>{
        res.status(500).json(err)
    })
}

exports.fetchExperience = async(req,res) => {
    try{
const result = await Experience.find()
res.status(200).json(result)
    }catch(err){
        res.status(500).json({msg:err,success:false})
    }
}