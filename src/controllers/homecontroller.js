const Home = require("../models/homemodel")

const homecontroller=async(req,res)=>{
    try{
        const data=await Home.find();
        res.status(200).json({
            message:"success",
            response:data
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=homecontroller;