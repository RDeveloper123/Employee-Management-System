const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/project").then(()=>console.log("Database Connected...")).catch((err)=>console.log("Database Connection Failed"));

const schema=mongoose.Schema({
    name:{type:String},
    nikName:{type:String},
    email:{type:String},
    phone:{type:Number},
    gender:{type:String},
    department:{type:String},
    work:{type:String},
    shiftTime:{type:String},
    date:{type:Date},
    file:{type:String},
})
 
const modelDB=mongoose.model("Employee",schema);

module.exports=modelDB;