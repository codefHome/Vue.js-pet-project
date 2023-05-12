const mongoose =require("mongoose")

const settings = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
const connection=()=>{
const user=process.env.USER
const password=process.env.PASSWORD
const db=process.env.DB
const dbUrl=(`mongodb+srv://${user}:${password}@clustorkoa.szuiu2s.mongodb.net/${db}?retryWrites=true&w=majority`)

mongoose.connect(dbUrl,settings).then(()=>{
    console.log("Connected to the DB")
}).catch((e)=>{
    console.log("Error",e)
})

}
module.exports= connection