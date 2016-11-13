var express        = require('express');
var router         = express.Router();
var path           = require('path');
var passport       = require('passport');
var fs             = require('fs');
var connect        = require('connect');
var methodOverride = require('method-override');
var appjs          = require('../../app');
var request        = require('request');
var morgan         = require('morgan');

//this should be exporting variable but its not working for some fucking reason
var mojiotestlocationlong = appjs.mojiotestlocationlong;
var mojiotestlocationlat = appjs.mojiotestlocationlat;
var mojiotesttime = appjs.mojiotesttime;
var bodyholder;

router.get('/', function(req, res, next) {
   console.log("home route hit");
   res.json({message:"car is enroute or maybe not"});
});


router.get('/runprogram', function(req, res, next) {
   console.log("program initialized");
   console.log(" long is "+mojiotestlocationlong+" lat is"+mojiotestlocationlat);
   console.log("running program");
   getgoogleplacesdata(mojiotestlocationlong,mojiotestlocationlat); //this is running the rest
});

//this needs be to changed with the test url
//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${carlocationlat},{carlocationlong}&radius=500&type=restaurant&keyword=cruise&key=GOOGLE_PLACES_API_KEY`


var getgoogleplacesdata = function(carlocationlong, carlocationlat, cartime){

request('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=34.1020231,-118.34097120000001&radius=10&keyword=points_of_interest&key=AIzaSyCihzpBz81mq08Dc1g2xCmyqIVKeJQNQwo',

  function (error, response, body) {
  if (!error && response.statusCode == 200) {
    bodyholder = body;
    console.log(bodyholder.results.types[0]);// Print the google web page.
//this is how we would run the right ones
    //bodyholder.results.types[0]

    // res.json(body);
  }
});
//this will need to be a sort through the json object

            // for(i=0; i< data.results.length;i++){
            // console.log(data.results[i].name);
            // $("#div1").append(data.results[i].name);
            // $(".ulclass").append('<li>'+data.results[i].name+'</li>');
            // }


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
