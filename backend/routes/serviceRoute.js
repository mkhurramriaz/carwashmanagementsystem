const express=require('express');
const serviceRoute=express.Router()
const bookService =require('../controllers/serviceController');
serviceRoute.post('/service',bookService);
module.exports=serviceRoute; 