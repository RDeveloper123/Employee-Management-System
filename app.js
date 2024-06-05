const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const bodyParser=require("body-parser");
const modelDB=require("./db");

const filePath=path.join(__dirname,"/public");
const partialsPath=path.join(__dirname,"/partials");
const viewsPath=path.join(__dirname,"/views");

app.use(express.json());
app.use(express.static(filePath))
app.set("view engine","hbs");
app.set("views",viewsPath);
app.set(hbs.registerPartials(partialsPath))

app.use(bodyParser.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.render("HrmAddEmployee")
})
app.get("/HrmEmployee",async(req,res)=>{
    try {
     
       const dataSave = await modelDB.find();
       res.send(dataSave);
    } catch (error) {
        
    }
})
app.post("/HrmAddEmployee",async(req,res)=>{
    try {
        
    const formData= new modelDB({
        name:req.body.name,
        nikName:req.body.nikName,
        email:req.body.email,
        phone:req.body.phone,
        gender:req.body.gender,
        department:req.body.department,
        work:req.body.work,
        shiftTime:req.body.shiftTime,
        date:req.body.date,
        file:req.body.file,

    })

   const dataSave = await formData.save();
   res.send(dataSave);
   

    } catch (error) {
        res.send(error)        
    }
})

app.listen(3030,()=>console.log("Server Connected Successfully..."))

