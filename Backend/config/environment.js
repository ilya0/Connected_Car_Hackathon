var _ = require('lodash');

var localEnvVars = {
  TITLE: 'ANDTHEN',
  SAFE_TITLE: 'andthen'
};


// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
