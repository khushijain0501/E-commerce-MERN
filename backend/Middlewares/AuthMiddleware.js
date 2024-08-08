const User=require("../Models/UserModel");
require("dotenv").config();
const jwt=require("jsonwebtoken");

module.exports.userVerification=async (req,res,next)=>{
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({ status: false, message: 'No token, authorization denied' });
    }
    jwt.verify(token,process.env.TOKEN_KEY, async(err,data)=>{
        if(err){
            return res.status(401).json({ message: "Token is not valid"})
        }
        try{
            req.user= await User.findById(data.id)
            if(!req.user)
                return res.json({status:false})
            // return res.json({status:true,user:user.name})
            // else
            // return res.json({status:false})
            next();
        }
        catch (err) {
            return res.status(500).json({ status: false, message: 'Server error' });
          }
    })

    // try{
    //     const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    //     const user=await User.findById(decoded.id);
    //     console.log(decoded)
    //     console.log(user)
    //     if(!user){
    //         return res.status(401).json({ status: false, message: "User not found" });
    //     }
    //     req.user=user;
    //     console.log(req.user)
    //     next();
    // }
    // catch(err){
    //     res.status(401).json({status:false,message:"Token is not valid"})
    // }
};