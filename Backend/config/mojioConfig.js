// MOJIO Code

var MojioClientLite = require('mojio-client-lite');

var config = {
      application: '066c5a0e-aa49-4533-9d13-60d511726bbf' // your application ID
    }

var mojio_client = new MojioClientLite(MojioClientLite);

if (mojio_client.token()){
  alert("Auth successful");
}
else{
  mojio_client.authorize();
}
console.log("logged in");

require('dotenv').load(); // load ENV variables dynamically by callig process.env.WHATEVER

var env      = require('./Backend/config/environment'); // Load up localhost through nodemon
var mongoose = require('./Backend/config/database'); // Load Up mongoose through mongod and mongo
var routes   = require('./Backend/config/routes'); // Get routes that call a method which are exported through module.exports from controllers

var app = express(); //app instance of express

var indexRoutes = require('./Backend/config/routes');

console.log ("mojioConfig connected");


