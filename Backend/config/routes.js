var express        = require('express');
var router         = express.Router();
var path           = require('path');
var passport       = require('passport');
var fs             = require('fs');
var connect        = require('connect');
var methodOverride = require('method-override');
var appjs          = require('../../app');

var mojiotestlocationlong = appjs.mojiotestlocationlong;
var mojiotestlocationlat = appjs.mojiotestlocationlat;
var mojiotesttime = appjs.mojiotesttime;

router.get('/', function(req, res, next) {
   console.log("home route hit");
   res.json({message:"car is enroute or maybe not"});
});


router.get('/runprogram', function(req, res, next) {
   console.log("program initialized");
   console.log("long is "+mojiotestlocationlong+"lat is"+mojiotestlocationlat);
   console.log("running program");
   getgoogleplacesdata(mojiotestlocationlong,mojiotestlocationlat); //this is running the rest
});


var getgoogleplacesdata = function(carlocationlong, carlocationlat, cartime){
        $.ajax({
          url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${carlocationlat},{carlocationlong}&radius=500&type=restaurant&keyword=cruise&key=GOOGLE_PLACES_API_KEY`,

          })
        .done(function(data){
          givemedata = data;
          console.log(data);



//this will need to be a sort through the json object

            // $("#div1").html("this is changing the div1 on button click");

            // for(i=0; i< data.results.length;i++){
            // console.log(data.results[i].name);
            // $("#div1").append(data.results[i].name);
            // $(".ulclass").append('<li>'+data.results[i].name+'</li>');
            // }

           });
        };






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
