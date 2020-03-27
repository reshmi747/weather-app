$(document).ready(function() {

  // Get Location
  navigator.geolocation.getCurrentPosition(success, error);

  function success(pos) {
    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;
    weather(lat, long);
  }

  function error() {
    console.log("There was an error");
  }

  // Call Weather
  function weather(lat, long) {
    var URL =
      "https:/api.openweathermap.org/data/2.5/weather?q={city name}&appid={035df5d588a5b0479b38bf3f7ec32fcc}

";

    $.getJSON(URL, function(data) {
      updateDOM(data);
    });
  }

  // Update Dom
  function updateDOM(data) {
    var city = data.name;
    var temp = Math.round(data.main.temp_max);
    var desc = data.weather[0].description;
    var icon = data.weather[0].icon;

    $("#city").html(city);
    $("#temp").html(temp);
    $("#desc").html(desc);
    $("#icon").attr("src", icon);
  }
});
