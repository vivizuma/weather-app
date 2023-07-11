let jsonData;

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const json = await response.json();
  jsonData = json;
  console.log(jsonData);
}

fetchData();

const APP = {
  init() {
    console.log("script loaded");
    APP.eventListeners();
  },
  eventListeners() {
    const searchBtn = document.getElementById("search-btn");
    searchBtn.addEventListener("click", APP.searchClicked);
  },
  searchClicked() {
    console.log("hello");
    const input = document.getElementById("search-field");
    const value = input.value;
    console.log(input.value);
    getWeather(value);
  },
  getWeather(location) {
    fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=146bc6e955bc4674a65135729230707&q=Atlanta&days=1&aqi=no&alerts=no"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response);
      });
  },
};

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

// async function fetchWeather(location, apiKey, baseUrl) {
//   fetch(
//     `${baseUrl}/forecast.json?key=${apiKey}&q=${location}&days=1&aqi=no&alerts=no`
//   )
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// fetchWeather("London", apiKey, baseUrl);

document.addEventListener("DOMContentLoaded", APP.init);
