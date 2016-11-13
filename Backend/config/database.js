var mongoose = require('mongoose');

var env = require('./environment');

var dbUri = process.env.MLAB_URI ||
            'mongodb://localhost/' + process.env.SAFE_TITLE;


if (!env.MLAB_URI) {
  require('net').connect(27017, 'localhost').on('error', function() {
    console.log("YOU MUST BOW BEFORE THE MONGOD FIRST, MORTAL!");
    process.exit(0);
  });
}

if(!mongoose.connection._hasOpened) {
  mongoose.connect(dbUri);
}

module.exports = mongoose;
