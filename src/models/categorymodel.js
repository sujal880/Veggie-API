const mongoose=require('mongoose');
const categorySchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    imagename:{
        type:String,
        required:true
    },
    _id:{
        type:String,
        required:true
    }
});

const Category=mongoose.model('categories',categorySchema);
module.exports=Category;