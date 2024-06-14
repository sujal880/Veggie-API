const express=require('express');
const allroutes = require('./app');
require('./config/db');
const PORT=4000;
const app=express();
app.use(express.json());
app.use(allroutes);

app.get('/',(req,res)=>{
    res.status(200).json({
        message:'Server is Properly Running'
    })
})

app.listen(PORT,()=>{
    console.log(`Server is Running on PORT ${PORT}`);
})