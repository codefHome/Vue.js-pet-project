const { Schema,model, default: mongoose } =require( "mongoose")


const mailSchema = new Schema({
  mailId: Number,
  senderName: String,
  message: String,
  email: String,
});

const MyMail = model('MyMail', mailSchema);

module.exports= MyMail