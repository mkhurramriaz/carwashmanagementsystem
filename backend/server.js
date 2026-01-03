require("dotenv").config();
const cors= require('cors');
const express=require('express');
const connectiontoDb = require('./config/connectiontoDb');
// const userModel = require("./models/userModel");
const userRoute = require("./routes/userRoute");
const serviceRoute=require("./routes/userRoute");


const app=express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));
app.use(express.json());
app.get("/",(req,res)=>{
    res.status(200).send({msg:"server has been started",name:"xyz",data:"excited??"})
})
//to register a user
app.use('/user',userRoute)
app.use("/bookservice",serviceRoute)
//connection to data base.
connectiontoDb();

app.listen(5000,()=>{
    console.log("server has started succesfully ")
    console.log("MONGO_URI =", process.env.MONGO_URI);
}) 