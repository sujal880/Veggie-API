const User = require("../models/usermodel");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const secretkey="hsdhskisokjdsnkjcdhsnkihwndikhwksdnwhndwhd";
const signincontroller=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            res.status(400).json({
                message:"enter email & password"
            })
        }
        const existinguser=await User.findOne({email});
        if(!existinguser){
            return res.status(400).json({
                message:"invalid email and password"
            })
        }
        const isMatch=await bcrypt.compare(password,existinguser.password);
        if(!isMatch){
            res.status(400).json({
                message:"password does't match"
            })
        }
        const token=jwt.sign({
            userId:existinguser._id,
        },secretkey,{expiresIn:'48h'});

        res.status(200).json({
            message:"sign in Success",
            data:existinguser,
            token:token
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=signincontroller;