const MyMail = require("../models/MyInformation");
const SENDMAIL =require("./mailer");
const router = require("express").Router();
const HTML_TEMPLATE =require('./mail-template.js')
const dotenv =require('dotenv')
dotenv.config()
const myEmail=process.env.EMAIL
exports.sendMail=async(req,res)=>{
    const mailOptions={
          from:req.body.email,
          to:myEmail,
          subject:"Hello from vue.js and Node.js",
          html: HTML_TEMPLATE(req.body.message),
          context:{
            senderName:req.body.senderName,
            email:req.body.email,
            message:req.body.email,
          }
      }
     await SENDMAIL(mailOptions, (info) => {
        console.log("Email sent successfully");
        console.log("MESSAGE ID: ", info.messageId);
        MyMail.create({...req.body})
      }).then(response=>{
        res.status(201).json({message:'Email sent Successfully'})
      }).catch(err=>{
        res.status(500).json({message:'Error'})
      })


}



   
    // transporter.sendMail(mailOptions(req,res),(error,info)=>{
    //   if(error){
    //     console.log(error)
    //   }else{
    //     console.log('Email sent: ' + info.response);
    //     res.status(200).send("Email sent");
    //   }
    // })
