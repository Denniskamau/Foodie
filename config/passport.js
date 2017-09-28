const JwtStrategy= require('passport-jwt').Strategy;
const ExtractJwt= require('passport-Jwt').ExtractJwt
const User = require('../models/user');
const config = require ('../config/database');

module.export= function(passport){
    let opts={};
    opts.jwtFromRequest= ExtractJwt.fromAuthHeader();
    opts.secretOrkey = config.secret
    password.use(new JwtStrategy(opts, function(jwt_payload, done){
        User.getUserById(jwt_payload._id, function(err,user){
            if(err){
                return done(err, false);
            }

            if ((User)){ 
                return done(null,user);
            }

            else {
                return done(null, false);
            }
        })
    }))
}