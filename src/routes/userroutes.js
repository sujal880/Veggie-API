const express=require('express');
const signup = require('../controllers/signupcontroller');
const signincontroller = require('../controllers/signincontroller');
const carousel = require('../controllers/carouselcontroller');
const categoryController = require('../controllers/categorycontroller');
const homecontroller = require('../controllers/homecontroller');
const verify=require('../controllers/verifycontrollers');
const routes=express.Router();

routes.post('/signup',signup);
routes.post('/signin',signincontroller);
routes.get('/carousel',verify,carousel);
routes.get('/categories',verify,categoryController);
routes.get('/home',verify,homecontroller);

module.exports=routes;