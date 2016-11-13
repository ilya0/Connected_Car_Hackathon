var express        = require('express');
var router         = express.Router();
var path           = require('path');
var passport       = require('passport');
var fs             = require('fs');
var connect        = require('connect');
var methodOverride = require('method-override');



router.get('/', function(req, res, next) {
   console.log("home route hit");
   res.json({message:"car is enroute or maybe not"});
});


// router.get('/', /* someController.method */);

// // Google OAuth
// router.get(/* some route */, passport.authenticate('google-oauth20'), function(req, res) {

// });

// router.get(/* some route */, passport.authenticate('google-oauth20', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
// });


// function authenticate(req, res, next) {
//   if(req.user) {
//     next();
//   } else {
//     res.redirect( some route );
//   }
// }

// router.get('/logout', function(req, res) {
//   req.logout();
//   res.redirect('/');
// });



module.exports = router;
