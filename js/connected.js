 var config = {
      application: '066c5a0e-aa49-4533-9d13-60d511726bbf' // your application ID
      secret:  '0cbf1b3b-cacc-49dc-8e62-9fb3a508f1d6' // your application secret
      environment: '' // staging, develope, ...
      accountsURL: 'accounts.moj.io'
      apiURL: 'api.moj.io'
      pushURL: 'push.moj.io'
      scope:'full'
      acceptLanguage:'en'
    }

var MojioClientLite= require("MojioClientLite");

var config = {
    application: '066c5a0e-aa49-4533-9d13-60d511726bbf',
    secret:'0cbf1b3b-cacc-49dc-8e62-9fb3a508f1d6'
};

var mojio_client = new MojioClientLite(config);

 if (mojio_client.token())
    {
        alert("Authorization Successful.");
        // Here you can call API calls for authorized user
    }
    else
    {
        // No authorized user, redirect to Mojio authentication server.
        mojio_client.authorize();
    }
    mojio_client.refreshToken();


// (function() {
//   var MojioClient, config, mojio_client;
//   MojioClient = this.MojioClient;
//   // Create configurations with your app information.
//   config = {
//     application: '066c5a0e-aa49-4533-9d13-60d511726bbf', // Fill in your app id here!
//     redirect_uri: 'localhost:8000/Connected_Car_Hackathon/index.html', // Fill in you redirect uri here! (Ex. 'http://localhost:4093/index.html')
//     secret:'0cbf1b3b-cacc-49dc-8e62-9fb3a508f1d6',
//     hostname: 'api.moj.io',
//     version: 'v1',
//     port: '443',
//     scheme: 'https',
//     live: false // or true (Sandbox and Live are now one server so this value won't have an effect!)
//   };
//   // Create a new client with your configurations.
//   mojio_client = new MojioClient(config);

//   mojio_client.login('marcusgraydev@gmail.com', 'Ogunmojio1313', function (error,result){
//       if (error) {
//           return alert("error:" +error);
//       }else{
//         var div = $("#welcome");
//         div.html('POST /login<br />');
//         return div.append(JSON.stringify(result));
//       }
//   });
// }).call(this);


