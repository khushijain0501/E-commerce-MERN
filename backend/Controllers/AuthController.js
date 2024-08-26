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
    const {cartVal,userInfo}=req.body;
    // const {userInfo}=req.body.userInfo
    // const userId=req.user._id;
    console.log(cartVal)
    console.log(userInfo)
    try{
        // if (!userInfo || !userInfo._id) {
        //     throw new Error("User ID is missing");
        // }
        if (!Array.isArray(cartVal)) {
            throw new Error("cartVal should be an array");
        }
        const result=await User.findByIdAndUpdate(userInfo.user._id,{ $push: { cart: { $each: cartVal } } },{new:true});
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
    console.log(userId)
    try{
        const user=await User.findById(userId);
        console.log(user.cart)
        if(!user){
            return res.status(404).send({ success: false, message: 'User not found' });
        }
        res.status(200).json({cartItems:user.cart});
    }
    catch(err){
        console.log("error fetching the cart",err);
        res.status(500).send({success:false,message:"Error fetching cart"});
    }
}
module.exports.SaveProfileInfo=async (req,res)=>{
    const {userInfo}=req.body;
    const {user}=userInfo
    console.log(user)
    try{
    const updatedUser= await User.findByIdAndUpdate(user._id,
        {
            $set:
            { 
                firstName: user.firstName,
                lastName: user.lastName,
                mobile: user.phone,
                address: user.address, // Assuming address is an array of objects with address, city, and state
                avatar: user.avatar,
            }
        },
        {new:true}
    );
    if(!updatedUser){
        return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, user: updatedUser});
}
catch (err) {
    console.log("Error saving profile info", err);
    res.status(500).json({ success: false, message: "Error saving profile info" });
}
}