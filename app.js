const APP = {
  init() {
    console.log("script loaded");
  },
  
  
};

document.addEventListener("DOMContentLoaded", APP.init);
fetch("http://api.weatherapi.com/v1/forecast.json?key=146bc6e955bc4674a65135729230707&q=London&days=1&aqi=no&alerts=no")
.then(function(response){
  return response.json();
})
.then(function(response){
  console.log(response)
})
