const { Schema,model, default: mongoose } =require( "mongoose")


const ExperienceModel = new Schema({
 
  experiences:{
    type:Array,
    items:{
        type:Object,
        properties:{
          companyName:{type:String},
            title:{type:String},
            companyDescription:{type:String},
            companyLink:{type:String},
            startYear:{type:Date},
            endYear:{type:Date},
            projects:{
              type:Array,
              items:{
                type:Object,
                properties:{
                  projectName:{type:String},
                  location:{type:String},
                  workType:{type:String},
                  role:{type:String},
                  startDate:{type:Date},
                  endDate:{type:Date},
                  projectDescription:{type:String},
                  responsibility:{type:String},
                  technologies:{type:String}


                }
              }

            }
        }
    }
  }
});

const Experience = model('Experience', ExperienceModel);

module.exports= Experience