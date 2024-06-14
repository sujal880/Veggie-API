const express=require('express');
const routes = require('./src/routes/userroutes');
const allroutes=express.Router();

allroutes.use('/veggie',routes);

module.exports=allroutes;