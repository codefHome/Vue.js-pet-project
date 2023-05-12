const nodemailer =require("nodemailer");
const dotenv =require('dotenv')
dotenv.config()
const appPassword=process.env.APP_PASSWORD

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "node8express1@gmail.com",
    pass: appPassword,
  },
});

const SENDMAIL = async (mailDetails, callback) => {
    try {
      const info = await transporter.sendMail(mailDetails)
      callback(info);
    } catch (error) {
      console.log(error);
    } 
  };

  module.exports= SENDMAIL;