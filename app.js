var express        = require('express'); //linking the express module
var bodyParser     = require('body-parser');
var port           = process.env.PORT || 3000; //  sets the listining port
var router         = express.Router(); //simplifying the router
var logger         = require( 'morgan' ); //logs the shit into console
var path           = require('path');
var http           = require('http'); // Im not sure if I need this I just cant get this fuckign http to link with the js and the css
var nodeflix       = require('./nodeflix');
// this is the global variable to allow the drone to fly or not
var shouldifly     = false;
var favicon        = require('serve-favicon');
var logger         = require('morgan'); // console.log errors
var debug          = require('debug')('app:http');
var cookieParser   = require('cookie-parser');
var session        = require('express-session'); //
var passport       = require('passport');
var User           = require('./Backend/models/user'); // Include User model within app
var request        = require('request'); // make http requests in the config/routes.js
var methodOverride = require('moethod-override');

require('dotenv').load(); // load ENV variables dynamically by callig process.env.WHATEVER

var env      = require('./Backend/config/environment'); // Load up localhost through nodemon
var mongoose = require('./Backend/config/database'); // Load Up mongoose through mongod and mongo
var routes   = require('./Backend/config/routes'); // Get routes that call a method which are exported through module.exports from controllers



var app = express(); //app instance of express


app.set('title', env.TITLE);
app.set('safe-title', env.SAFE_TITLE);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./Backend/config/database');
require('./Backend/config/passport');


app.locals.title = app.get('title');

app.use(session({
  secret: '',
  resave: false,
  saveUninitialized: true
}));

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


app.use('/', routes);


// NODEFLIX NETFLIX examples
var z = new nodeflix({
  consumer_key: '',
  consumer_secret: '',
  oauth_token: '',
  oauth_token_secret: '',
  user_id: ''
});

// get user information (colon prefixed strings will be replaced with matching config option(s) for convenience e.g. ':user_id')
n.get('/users/:user_id', function() {
    console.log(this.toJSON());
});

// lookup something from the people catalog
n.get('/catalog/people', { term: 'DeNiro' }, function(data) {
    console.log(data);
});

// delete something from a user's instant queue
n.delete('/users/:user_id/queues/instant/saved/60022048', function(data) {
    if(data.status && data.status.status_code == 200) {
        console.log('Item successfully deleted!');
    }
});

// add something to a user's instant queue
n.post('/users/:user_id/queues/instant', { title_ref: '/catalog/titles/series/70158331'}, function(data) {
    if(data.status && data.status.message == 'success') {
        console.log('Item successfully added to instant queue!')
    }
});

// also supports simple "deferred-like" (not a true deferred right now) syntax
n.get('/catalog/people', { term: 'Brad Pitt'}).end(function() {
    console.log(this.toJSON());
});

// chaining is all the rage these days
n.get('/catalog/people', { term: 'Bruce Willis' }).end(function() {
    console.log(this.toJSON());
}).get('/catalog/titles', { term: 'Voyager'}).end(function() {
    console.log(this.toJSON());
});

// END OF NODEFLIX NETFLIX examples


// Catches all 404 routes.
app.use(function(req, res, next) {
 var err = new Error('Not Found');
 err.status = 404;
 next(err);
});

// Error-handling layer.
app.use(function(err, req, res, next) {
 // In development, the error handler will print stacktrace.
 err = (app.get('env') === 'development') ? err : {};
 res.status(err.status || 500);
 res.render('error', {
   message: err.message,
   error: err
 });
});

function debugReq(req, res, next) {
 debug('params:', req.params);
 debug('query:',  req.query);
 debug('body:',   req.body);
 next();
}

//this is the home page
app.get('/', function(req,res){
  console.log(shouldifly);

  // res.json({message:messagedisplay});
  res.sendFile(path.join(__dirname + '/Views/index.html')); //goes through path and then opens the view
});

app.get('/getstatus', function(req,res){
     res.json({message:shouldifly});
});


//change var to fly, initate flight
app.post('/activatefly', function(req,res){

    shouldifly = true;
    console.log("activate fly route hit");
    console.log(shouldifly);

     res.json({sucess:true,message:'Fly activated'});
});


app.post('/deactivatefly', function(req,res){

    shouldifly = false;
    console.log("deactivate fly route hit");
    console.log(shouldifly);

     res.json({sucess:false,message:'Fly Deactivated'});
});



app.listen(port, function() {
  console.log('drone security running on port', port);
});

module.exports = router;
