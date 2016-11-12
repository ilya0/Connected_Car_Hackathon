(function() {
  var MojioClient, config, mojio_client;
  MojioClient = this.MojioClient;
  // Create configurations with your app information.
  config = {
    application: '066c5a0e-aa49-4533-9d13-60d511726bbf', // Fill in your app id here!
    redirect_uri: 'localhost:8000/Connected_Car_Hackathon/index.html', // Fill in you redirect uri here! (Ex. 'http://localhost:4093/index.html')
    secret:'0cbf1b3b-cacc-49dc-8e62-9fb3a508f1d6',
    hostname: 'api.moj.io',
    version: 'v1',
    port: '443',
    scheme: 'https',
    live: false // or true (Sandbox and Live are now one server so this value won't have an effect!)
  };
  // Create a new client with your configurations.
  mojio_client = new MojioClient(config);

  mojio_client.login('marcusgraydev@gmail.com', 'Ogunmojio1313', function (error,result){
      if (error) {
          return alert("error:" +error);
      }else{
        var div = $("#welcome");
        div.html('POST /login<br />');
        return div.append(JSON.stringify(result));
      }
  });
}).call(this);



// MojioClient mojioClient = new MojioClient.Builder("066c5a0e-aa49-4533-9d13-60d511726bbf", "0cbf1b3b-cacc-49dc-8e62-9fb3a508f1d6").build();

// Call<User> loginCall = mojioClient.login("marcusgraydev@gmail.com", "Ogunmojio1313");
// call.enqueue(new Callback<User>() {
//      @Override
//      public void onResponse(Call<User> call, Response<User> response) {
//         if (response.isSuccessful()) {
//             // Success! Log the user in!
//         } else {
//             // Handle the error - this means we got a response without a success code. The user probably
//             // entered the wrong username or password
//         }
//      }

//      @Override
//      public void onFailure(Call<User> call, Throwable t) {
//          // Handle the error - this is caused by a request failure such as loss of network connectivity
//      });

//      try {
//     Response<User> response = loginCall.execute();
//     if (response.isSuccessful()) {
//         // Success! Log the user in!
//     } else {
//         // Handle the error - this means we got a response without a success code. The user probably
//         // entered the wrong username or password
//     }
// } catch (IOException e) {
//     // Handle the error - this is caused by a request failure such as loss of network connectivity
// }

// client.rest().getVehicles().enqueue(new Callback<ListResponse<Vehicle>>() {
//         @Override
//         public void onResponse(Call<ListResponse<Vehicle>> call, Response<ListResponse<Vehicle>> response) {
//            if (response.isSuccessful()) {
//                List<Vehicle> vehicles = response.body().getData();
//                // Show the user their vehicles!
//            } else {
//                // Handle the error - this means we got a response without a success code. Are you logged in?
//            }
//         }

//         @Override
//         public void onFailure(Call<ListResponse<Vehicle>> call, Throwable t) {
//             // Handle the error - this is caused by a request failure such as loss of network connectivity
//         });
