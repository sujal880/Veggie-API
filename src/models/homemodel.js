const mongoose=require('mongoose');
const homeSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    imagename:{
        type:String,
        required:true
    }
});

const Home=mongoose.model('homes',homeSchema);
module.exports=Home;