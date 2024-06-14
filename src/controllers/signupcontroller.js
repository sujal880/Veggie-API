const User = require("../models/usermodel");
const bcrypt=require('bcrypt');
const signup=async(req,res)=>{
    try{
        const {email,password,username}=req.body;
        if(!email || !password || !username){
            res.status(400).json({
                message:"enter email password & username"
            })
        }
        const existinguser=await User.findOne   ({email});
        if(existinguser){
            res.status(400).json({
                message:"user already exists"
            })
        }
        const hashedpassword=await bcrypt.hash(password,10);
        const data=new User({
            email:email,
            password:hashedpassword,
            username:username
        });
        const response=await data.save();
        res.status(200).json({
            message:"user created",
            data:response
        })

    }
    catch(ex){
        console.log(ex);
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=signup;