// var passport = require('passport');
// var User = require('../models/user');
// var GoogleStrategy = require('passport-google-oauth20').Strategy;
// var request = require('request');


// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_SECRET,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: process.env.CALLBACK_URL
// },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findorCreate({ googleId: profile.id }, function (err, user) {
//       if (err) {return cb(err)};
//       if (user) {return cb(null, user)};
//       var newUser = new User({
//         name: profile.name,
//         email: profile.email,
//         clientId: profile.id
//       });
//       return cb(err, user);
//     });
//   }
// ));


// // configure serializeUser
// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });


// // configure deserializeUser
// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });
