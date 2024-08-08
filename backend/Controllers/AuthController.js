const User=require("../Models/UserModel");
const {createSecretToken}=require("../util/SecretToken");
const bcrypt=require("bcryptjs");
const express = require('express');
// const authenticateToken=require('../Middlewares/AuthMiddleware')

module.exports.Signup= async (req,res,next)=>{
    try{
        const {name,email,password,createdAt}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.json({message:"User already exists"});
        }
        const user=await User.create({name,email,password,createdAt})
        const token=createSecretToken(user._id);
        res.cookie("token",token,{
            withCredentials:true,
            httpOnly:false,
        });
        res.status(201)
        .json({message:"User Signed in successfully",success:true,user})
        next();
    }
    catch(error){
        console.log(error)
    }
}

module.exports.Login=async (req,res,next)=>{
    try{
        const {email,password}=req.body;
        
        if(!email || !password){
            return res.json({message: "All fields are required"})
        }
        const user=await User.findOne({email});
        if(!user){
            return res.json({message:"Incorrect password or email"})
        }
        const auth=await bcrypt.compare(password,user.password)
        if(!auth){
            return res.json({message:"Incorrect password or email"})
        }
        const token=createSecretToken(user._id);
        res.cookie("token",token,{
            withCredentials:true,
            httpOnly:false,
        })
        res.status(201).json({message:"Logged in successfully",success:true,user});
        next()
    }
    catch(err){
        console.log(err)
    }
}

module.exports.SaveCart=async (req,res)=>{
    console.log("in save cart")
    const {cartItems,userInfo}=req.body;
    // const {userInfo}=req.body.userInfo
    // const userId=req.user._id;
    console.log(cartItems)
    console.log(userInfo)
    try{
        // if (!userInfo || !userInfo._id) {
        //     throw new Error("User ID is missing");
        // }
        const result=await User.findByIdAndUpdate(userInfo.user._id,{cart:cartItems},{new:true});
        if(!result)
            throw new Error("User not found or update failed")
        console.log("Updated",result)
        res.status(200).send({success:true});
    }
    catch(err){
        console.log("error saving the cart",err);
        res.status(500).send({success:false,message:"Error saving cart"});
    }
};
module.exports.GetCart=async (req,res)=>{
    const userId=req.query.userId;
    try{
        const user=await User.findById(userId);
        if(!user){
            return res.status(404).send({ success: false, message: 'User not found' });
        }
        res.status(200).send({cartItems:user.cart});
    }
    catch(err){
        console.log("error fetching the cart",err);
        res.status(500).send({success:false,message:"Error fetching cart"});
    }
}