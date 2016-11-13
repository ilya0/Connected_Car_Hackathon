var Mojio, mojio, config;

config = {
  application: '066c5a0e-aa49-4533-9d13-60d511726bbf',
  secret: '0cbf1b3b-cacc-49dc-8e62-9fb3a508f1d6',
  hostname: 'api.moj.io',
  version: 'v1',
  port: '443',
  scheme: 'https'
};

Mojio = require('./lib/MojioClient.js');

mojio = new Mojio(config);

mojio.login('marcusgraydev@gmail.com', 'Ogunmojio1313', function(error, result) {
  if (error) {
    return console.log("error: " + error);
  } else {
    return console.log("success:" + result);
  }
});
