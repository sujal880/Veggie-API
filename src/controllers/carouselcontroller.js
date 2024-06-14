const Carousel = require("../models/carouselmodel");

const carousel=async(req,res)=>{
    try{
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