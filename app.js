const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config= require('./config/database');

//db connection
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected',function(){
    console.log('Connected to database'+config.database);
});

//error connection
mongoose.connection.on('error',function(err){
    console.log('database error'+err);
});

//initialisin the app variable
const app=express();

//Bring in the users folder from the routes
const Order=require('./routes/users');

//port number
const port= 3000;

//allows requests from a different domain name
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

//get details from form
app.use(bodyparser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//require('./config/passport')(passport);

app.use('/users', Order);

//route to homepage
app.get('/', function(req, res){
    res.send('Invalid endpoint')
});

//port listening and starts server
app.listen(port, function(){
    console.log('server started on port' +port);
});