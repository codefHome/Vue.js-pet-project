const { Schema,model, default: mongoose } =require( "mongoose")


const MyInfoModel = new Schema({
  homeTitle: {
    type:String
  },
  homeDetail: {
    type:String
  },
  aboutSection1: {
    type:String
  },
  aboutSection2: {
    type:String
  },
  aboutSection3: {
    type:String
  },
  stacks:{
    type:Array,
    items:{
        type:Object,
        properties:{
            id:{type:Number},
            name:{type:String}
        }
    },
    
  },
 
});

const MyInfos = model('MyInfo', MyInfoModel);

module.exports= MyInfos