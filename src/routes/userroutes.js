const express=require('express');
const signup = require('../controllers/signupcontroller');
const signincontroller = require('../controllers/signincontroller');
const carousel = require('../controllers/carouselcontroller');
const categoryController = require('../controllers/categorycontroller');
const homecontroller = require('../controllers/homecontroller');
const routes=express.Router();

routes.post('/signup',signup);
routes.post('/signin',signincontroller);
routes.get('/carousel',carousel);
routes.get('/categories',categoryController);
routes.get('/home',homecontroller);

module.exports=routes;