

const express =require('express')
const app =express();
const cors = require("cors");
const dotenv=require('dotenv')
const router=require('./routes/index.js')
const connection =require('./src/models/connection.js')
// const SENDMAIL =require("./mailer.js") 



// let transporter=nodemailer.createTransport({
//   service:'gmail',
//   host:'smtp.gmail.com',
//   port:587,
//   secure:true,
//   auth:{
//     user:'node8express1@gmail.com',
//     pass:'xqocfshlltpjvuue'
//   }
// });

// transporter.use(
//   "compile",
//   hbs({
//     viewEngine:{
//       extName:'.js',
//       partialsDir:'views',
//       layoutsDir:'views',
//       defaultLayout:'',
//     },
//     viewPath:'views',
//     extName:'.js',
//   })
// );

// const mailOptions=(req,res)=>{
//   return{
//     from:req.body.email,
//     to:"node8express1@gmail.com",
//     subject:"Hello from vue.js and Node.js",
//     html: HTML_TEMPLATE(req.body.message),
//     context:{
//       name:req.body.name,
//       email:req.body.email,
//       message:req.body.email,
//     }
//   }
 
// }

// const message = "Hi there, you were emailed me through nodemailer"
// const options = {
//     from: "dursa.imofirst@gmail.com>", // sender address
//     to: "node8express1@gmail.com", // receiver email
//     subject: "Send email in Node.JS with Nodemailer using Gmail account", // Subject line 
//     text: message,
//     html: HTML_TEMPLATE(message),
// }
dotenv.config()
const port1 = process.env.PORT1 ;
const port2 = process.env.PORT2 ;
const corsOptions = {
  origin: [`http://localhost:${parseInt(port1)}`, `http://localhost:${parseInt(port2)}`]
};
app.use(cors(corsOptions))
app.use(express.json());
// app.post("/sendMail",(req,res)=>{
//   // SENDMAIL(options, (info) => {
//   //   console.log("Email sent successfully");
//   //   console.log("MESSAGE ID: ", info.messageId);
//   // });
//   transporter.sendMail(mailOptions(req,res),(error,info)=>{
//     if(error){
//       console.log(error)
//     }else{
//       console.log('Email sent: ' + info.response);
//       res.status(200).send("Email sent");
//     }
//   })
// })
connection();
app.use(express.urlencoded({ extended: true }));
app.use('/',router)
app.listen(5000,()=>{
  console.log("Server running on port 5000")
});