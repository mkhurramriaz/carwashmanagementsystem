const express=require('express');
const bcrypt=require("bcrypt")
 const userModel=require('../models/userModel')
 const jwt = require('jsonwebtoken')
 require("dotenv").config()
exports.registerUser=async(req,res)=>{

    const {email,password,name}=req.body;
    if(!email ||!password ||!name){
        return res.status(400).json({
            msg:"all fields are required",
        })
    }
    try {
        const hashedPassword= await bcrypt.hash(password,12) 
        const newUser=await userModel({...req.body,password:hashedPassword});
        await newUser.save();
        res.status(200).json({msg:"user added succesfully"})
    } catch (error) {
        res.status(501).json({msg:`error${error.message}`})
    }
}



exports.loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email ||!password){
            return res.status(400).json({
                msg:"all fields are required",
            });
        }
        const userData= await userModel.findOne({email});
        if(!userData){
           return  res.status(400).json({
            msg:"user not found",
           })
        }
        const result= await bcrypt.compare(password,userData.password)
        
       const token= jwt.sign({userId: userData._id},process.env.JWT_SECRET,{expiresIn:"24h"})
       console.log("JWT_SECRET: ",process.env.JWT_SECRET)
        if (result){
            return res.status(200).json({
                msg:"you have logged in successfully",
               token,
             })
        }


        res.status(401).json({
            msg:"incorrect password,please try again",
        })
    } catch (error) {
        res.status(500).json({
            msg:error.message,  
        })
    }
} 
// exports.loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Validate input
//     if (!email || !password) {
//       return res.status(400).json({
//         msg: "All input fields are required",
//       });
//     }

//     // Find user
//     const userData = await userModel.findOne({ email });

//     if (!userData) {
//       return res.status(404).json({
//         msg: "User not found",
//       });
//     }

//     // Check password (TEMP - plain text)
//     if (password !== userData.password) {
//       return res.status(401).json({
//         msg: "Incorrect password",
//       });
//     }

//     res.status(200).json({
//       msg: "User logged in successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       msg: error.message,
//     });
//   }
// };