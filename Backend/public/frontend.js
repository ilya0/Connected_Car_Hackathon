// frontend.js
console.log("js frontend script connected");


$( document ).ready(function(){ //on ready command
//console log ready
console.log("document readied");


$("#Activatedronebutton").click(function(){
  console.log("activate drone button pressed");
  shouldifly = true;
  $("#dronetext").append("Drone activated"); // this needs to append the drone status
  $(".body").css('background-image', 'url("Imgs/ACTIVE.png")');

 console.log(shouldifly);
  hitflyroute();
});



$("#Deactivatedronebutton").click(function(){
  console.log("deactiveate drone button pressed");
  shouldifly = false;
  $("#dronetext").append("Drone Deactivated"); // this needs to append the drone status
  console.log(shouldifly);
  hitkillroute();
});



// this is the function to send the post ajax reqest

  function hitflyroute(){
           $.ajax({ //ajax post request
            method: "POST", //post
            crossDomain: true,
            url: "/activatefly", //api url
            // data: {
            //   link: linkaddressvalue,
            // }, //data is textboxinfo var but it needs to be in object format for the ajax data
            error: function( response ){ //if error do this
              console.log("There was a problemmo.");
            }
          })

        .done(function( textboxinfo ){ //on done do this function
          console.log(textboxinfo); // console log var textboxinfo
         alert( "Data Saved: " + textboxinfo ); //alert textbox var
        });
  };

   function hitkillroute(){
           $.ajax({ //ajax post request
            method: "POST", //post
            crossDomain: true,
            url: "/deactivatefly", //api url
            // data: {
            //   link: linkaddressvalue,
            // }, //data is textboxinfo var but it needs to be in object format for the ajax data
            error: function( response ){ //if error do this
              console.log("There was a problemmo.");
            }
          })

        .done(function( textboxinfo ){ //on done do this function
          console.log(textboxinfo); // console log var textboxinfo
         alert( "Data Saved: " + textboxinfo ); //alert textbox var
        });
  };

});

