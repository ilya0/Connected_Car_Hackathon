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
var app            = express();

////Exporting variables from app.js not working
//this should be exporting variable but its not working for some fucking reason
// var mojiotestlocationlong = appjs.mojiotestlocationlong;
// var mojiotestlocationlat = appjs.mojiotestlocationlat;
// var mojiotesttime = appjs.mojiotesttime;

// these export situation needs to be fixed
///these would be the variables that mojio supplies
var mojiotestlocationlong = -118.34097120000001;
var mojiotestlocationlat = 34.1020231;
var mojiotesttime = "7:00 pm";

var bodyholder; // holds the body of the json
var historyarray = [];

// home page test
router.get('/', function(req, res, next) {
   console.log("home route hit");
   res.json({message:"car is enroute or maybe not"});
});





//initialize the program
router.get('/runprogram', function(req, res, next) {
   console.log(" /runprogram initialized");
   console.log(" long is "+mojiotestlocationlong+" lat is"+mojiotestlocationlat);
  request('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&rankby=distance&types=food&key=AIzaSyCihzpBz81mq08Dc1g2xCmyqIVKeJQNQwo',
      function (error, response, body) {
        if (!error && response.statusCode == 200) {

          bodyholder = JSON.parse(body);
         // console.log(typeof bodyholder);
         // console.log(bodyholder.types);

         if (bodyholder.status == 'ZERO_RESULTS'){
            console.log('no results on that location');
            res.json({message:'no results on that location'});
         }else{
         // console.log(bodyholder);
          //console.log(bodyholder.results[0].types[0]);
          res.send(bodyholder.results[0].types[0]);

        // key value push
    historyarray.push({type:bodyholder.results[0].types[0], Time: mojiotesttime});
      console.log(historyarray);
         }


        }

      }
  );

});

var runanaly = function(){
console.log("run analysis ran");
};




module.exports = router;
