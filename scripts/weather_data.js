jQuery(document).ready(function($) {
  //grabbing weather data
  $.ajax({
  url : "http://api.wunderground.com/api/1ae1ff17aea67a55/geolookup/conditions/q/MO/Kansas_City.json",
  dataType : "jsonp",
  success : function(parsed_json) {

  //declaring variables to data
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  var weather = parsed_json['current_observation']['weather'];
  var wind = parsed_json['current_observation']['wind_mph'];
  var weather_gif = parsed_json['current_observation']['icon_url']

  //declaring time and date variables
  var time = new Date();
  var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  var twoDaysOut = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);
  var threeDaysOut = new Date(new Date().getTime() + 72 * 60 * 60 * 1000);
  var fourDaysOut = new Date(new Date().getTime() + 96 * 60 * 60 * 1000);
  var fiveDaysOut = new Date(new Date().getTime() + 120 * 60 * 60 * 1000);
  var minutes = time.getMinutes();

  //check if minutes is single digit
  if (minutes.length == 1) {
     minutes = "0" + minutes;
  }

  //output to DOM
  $( "#city" ).html(location + " ");
  $( "#time" ).html( document.createTextNode("Time: " + time.getHours() + ":" + minutes + ":" + time.getSeconds()));
  $( "#weather" ).html( document.createTextNode("Weather: " + weather + "  ") );
  $( "#temp" ).html( document.createTextNode("Temp: " + temp_f + " F") );
  $( "#wind" ).html( document.createTextNode("Wind: " + wind + " MPH") );
  $( "#city" ).append('<img id="weather_gif" src="' + weather_gif + '"/>');
  $("#tomorrow").html(tomorrow);
  $("#twoDays").html(twoDaysOut);
  $("#threeDays").html(threeDaysOut);
  $("#fourDays").html(fourDaysOut);
  $("#fiveDays").html(fiveDaysOut);

  }
});
});

//Using Stylesheets based on time of day
function getStylesheet() {
  var currentTime = new Date().getHours();
    if (0 <= currentTime&&currentTime < 5) {
       document.write("<link rel='stylesheet' href='wp-includes/css/night.css' type='text/css'>");
    }
    if (5 <= currentTime&&currentTime < 18) {
       document.write("<link rel='stylesheet' href='wp-includes/css/day.css' type='text/css'>");
    }
    if (18 <= currentTime&&currentTime <= 24) {
       document.write("<link rel='stylesheet' href='wp-includes/css/night.css' type='text/css'>");
    }
 }
 //call function
 getStylesheet();


 //Ask permission to obain location informatoin
 function geoFindMe() {
    var output = document.getElementById("out");

    if (!navigator.geolocation){
       output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
       return;
    }

    function success(position) {
       var latitude = position.coords.latitude;
       var longitude = position.coords.longitude;

       output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

       var img = new Image();
       img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x200&sensor=false";

       output.appendChild(img);

       console.log("Latitude: " + latitude);
       console.log("Longitude: " + longitude);
    };

    function error() {
       output.innerHTML = "Unable to retrieve your location";
    };

    output.innerHTML = "<p>Location...</p>";

    navigator.geolocation.getCurrentPosition(success, error);
 }
