var express        = require('express'); //linking the express module
var bodyParser     = require('body-parser');
var port           = process.env.PORT || 3000; //  sets the listining port
var router         = express.Router(); //simplifying the router
var logger         = require( 'morgan' ); //logs the shit into console
var path           = require('path');
var http           = require('http'); // Im not sure if I need this I just cant get this fuckign http to link with the js and the css
var favicon        = require('serve-favicon');
var logger         = require('morgan'); // console.log errors
var debug          = require('debug')('app:http');
var cookieParser   = require('cookie-parser');
var session        = require('express-session'); //
var passport       = require('passport');
var User           = require('./Backend/models/user'); // Include User model within app
var request        = require('request'); // make http requests in the config/routes.js
var methodOverride = require('method-override');
var env            = require('./Backend/config/environment'); // Load up localhost through nodemon
var mongoose       = require('./Backend/config/database'); // through mongod and mongo
var app            = express(); //app instance of express
var indexRoutes    = require('./Backend/config/routes');
require('dotenv').load(); // load ENV variables dynamically by callig process.env.WHATEVER
var mojioConfig    = require('./Backend/config/mojioConfig');
var TMClient       = require('textmagic-rest-client'); ///sms magic text sending package





//creating a location and time variable to test
var mojiotestlocationlong = -118.34097120000001;
var mojiotestlocationlat = 34.1020231;
var mojiotesttime = 7;


exports.mojiotestlocationlong = mojiotestlocationlong;
exports.mojiotestlocationlat = mojiotestlocationlat;
exports.mojiotesttesttime = mojiotesttime;

//creating a massive storage array for users
var userarray = [
{name: "this is user1"},
{name: "this is user2"}
];



app.set('title', env.TITLE);
app.set('safe-title', env.SAFE_TITLE);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./Backend/config/database');
require('./Backend/config/passport');


app.locals.title = app.get('title');

// app.use(session({
//   secret: '',
//   resave: false,
//   saveUninitialized: true
// }));

// Logging Layer
app.use(logger('dev'));
app.use(methodOverride('_method'));

// Use middleware
app.use( logger( 'dev' ) ); // this allows the loggin into the console
app.use( bodyParser.json() ); //parses the json
app.use( bodyParser.urlencoded( { extended: false } ) ); // this is to use routes encoding
app.use(cookieParser('notsosecretnowareyou'));
app.use(express.static(path.join(__dirname, 'public'))); // for the serving up the public files


//PASSPORT Middleware
app.use(passport.initialize());
app.use(passport.session());


app.use(debugReq);


 app.use('/', indexRoutes);




// Catches all 404 routes.
app.use(function(req, res, next) {
 var err = new Error('Not Found');
 err.status = 404;
 next(err);
});

// // Error-handling layer.
// app.use(function(err, req, res, next) {
//  // In development, the error handler will print stacktrace.
//  err = (app.get('env') === 'development') ? err : {};
//  res.status(err.status || 500);
//  res.render('error', {
//    message: err.message,
//    error: err
//  });
// });

function debugReq(req, res, next) {
 debug('params:', req.params);
 debug('query:',  req.query);
 debug('body:',   req.body);
 next();
}

//this is the home page
// app.get('/', function(req,res){
//   console.log("home route hit");

//   // res.json({message:messagedisplay});
//   res.sendFile(path.join(__dirname + '/Views/index.html')); //goes through path and then opens the view
// });


// //this could be the status of the car
// app.get('/getstatus', function(req,res){
//      res.json({message:"car is enroute or maybe not"});
// });


// //change var to fly, initate flight
// app.post('/activatefly', function(req,res){

//     shouldifly = true;
//     console.log("activate fly route hit");
//     console.log(shouldifly);

//      res.json({sucess:true,message:'Fly activated'});
// });


// app.post('/deactivatefly', function(req,res){

//     shouldifly = false;
//     console.log("deactivate fly route hit");
//     console.log(shouldifly);

//      res.json({sucess:false,message:'Fly Deactivated'});
// });

// app.use('/', indexRoutes);

app.listen(port, function() {
  console.log('butler app running on', port);
});

module.exports = router;
