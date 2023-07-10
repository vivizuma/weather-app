const APP = {
  init() {
    console.log("script loaded");
  },
  eventListeners() {},
};

document.addEventListener("DOMContentLoaded", APP.init);
function getWeather(location) {
  fetch(
    "http://api.weatherapi.com/v1/forecast.json?key=146bc6e955bc4674a65135729230707&q=Atlanta&days=1&aqi=no&alerts=no"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    });
}

const apiKey = "146bc6e955bc4674a65135729230707";
const apiUrl = "http://api.weatherapi.com/v1/forecast.json?key=";
const baseUrl = "http://api.weatherapi.com/v1";

// fetch would be:
// forecast
// + api key
// + user input search value
// 
// "http://api.weatherapi.com/v1/forecast.json?key=146bc6e955bc4674a65135729230707&q=Atlanta&days=1&aqi=no&alerts=no"
// 
// 