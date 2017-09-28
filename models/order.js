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

    Size:{
        type: String
    },

    Spice:{
        type: String
    },

    Accompaniments:{
        type: String
    }

});

const Order = module.exports=mongoose.model('Order', OrderSchema);

module.exports.getUserById= function(id, callback){
    Order.findById(id, callback);
}

module.exports.getUserByTable = function(Table, callback){
    const query={Table:Table}
    User.findOne(query, callback);
}

module.exports.addOrder = function (newOrder, callback){
    newOrder.save(callback);
}

