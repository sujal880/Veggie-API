const Carousel = require("../models/carouselmodel");

const carousel=async(req,res)=>{
    try{
        const id=req.body;
        if(!id){
            res.status(400).json({
                message:"enter userid"
            })
        }

        const user=await Carousel.find();
        res.status(200).json({
            message:"success",
            data:user
        })
    }
    catch(ex){
        res.status(500).json({
            message:'internal server error'
        })
    }
}

module.exports=carousel;