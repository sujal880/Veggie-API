const mongoose=require('mongoose');
const carouselSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    _id:{
        type:String,
        required:true
    }
});

const Carousel=mongoose.model('carousels',carouselSchema);
module.exports=Carousel;