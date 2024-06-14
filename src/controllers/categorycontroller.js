const Category = require("../models/categorymodel")

const categoryController=async(req,res)=>{
    try{
        const data=await Category.find();
        res.status(200).json({
            message:"success",
            data:data
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=categoryController;