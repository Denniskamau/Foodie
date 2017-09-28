const express = require('express');
const router = express.Router();
const passport= require ('passport');
const jwt = require ('jsonwebtoken');
const Order= require('../models/order');
//const Order= require('../models/user');

router.post('/order', function(req,res,next){

    let newOrder = new Order({
        Table:req.body[0],
        Item: req.body[1],
        Size: req.body[2],
        Spice: req.body[3],
        Accompaniments:req.body[4]
    });
    
    Order.addOrder(newOrder, function(err, Order){
        if(err){
            res.json({success: false,msg:'Failed to Order'});
            console.log(err)
        }else{
            res.json({success: true,msg:'Order taken'});
        }
    });
});


