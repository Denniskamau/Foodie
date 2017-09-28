const mongoose= require('mongoose');
const config = require('../config/database');

//user schema
const OrderSchema= mongoose.Schema({
    Table:{
        type: String,
        required:true
    },

    Item:{
        type: String
    },

    size:{
        type: String
    },

    spice:{
        type: String
    },

    Accompaniments:{
        type: String
    }

});

const Order = module.exports=mongoose.model('Order', OrderSchema);



module.exports.addOrder = function (newOrder, callback){
    newOrder.save(callback);
}

