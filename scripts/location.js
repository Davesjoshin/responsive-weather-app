/*
//Using Stylesheets based on time of day
function getStylesheet() {
   var currentTime = new Date().getHours();
   if (0 <= currentTime&&currentTime < 5) {
      document.write("<link rel='stylesheet' href='wp-includes/css/day.css' type='text/css'>");
   }
   if (5 <= currentTime&&currentTime < 18) {
      document.write("<link rel='stylesheet' href='wp-includes/css/night.css' type='text/css'>");
   }
   if (18 <= currentTime&&currentTime <= 24) {
      document.write("<link rel='stylesheet' href='wp-includes/css/day.css' type='text/css'>");
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
*/
