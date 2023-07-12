let jsonData;

// async function fetchData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const json = await response.json();
//   jsonData = json;
// //   console.log(jsonData);
// // }

// fetchData();

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
    console.log("saerch clicked");
    const input = document.getElementById("search-field");
    const value = input.value;
    console.log(input.value);
    APP.getWeather(value);
  },
  getWeather(location) {
    if (location === "") {
      return;
    } else {
    }
    fetch(`${baseUrl}${taskUrl}${apiKey}&q=${location}&days=1&aqi=no&alerts=no`)
      .then((response) => response.json())
      .then((data) => {
        console.log("He111");
        console.log(data.location.name);
        console.log(apiKey);
        APP.renderCard(data);
      });
  },
  renderCard(data) {
    //sections
    const locationTitle = document.getElementById("card-header");
    const temperature = document.getElementById("temperature");
    const feelsLike = document.getElementById("feels-like");
    const text = document.getElementById("status-text");
    console.log(data);
    locationTitle.innerHTML = data.location.name;
    temperature.innerHTML = data.current.temp_c;
    feelsLike.innerHTML = data.current.feelslike_c;
    text.innerHTML = data.current.condition.text;
  },
};

const apiKey = "146bc6e955bc4674a65135729230707";
const apiUrl = "http://api.weatherapi.com/v1/forecast.json?key=";
const baseUrl = "http://api.weatherapi.com/v1";
const taskUrl = "/forecast.json?key=";

// fetch would be:
// forecast
// + api key
// + user input search value
//
// "http://api.weatherapi.com/v1/forecast.json?key=146bc6e955bc4674a65135729230707&q=Atlanta&days=1&aqi=no&alerts=no"
//api.weatherapi.com/v1forecast.json?key=146bc6e955bc4674a65135729230707&q=Atlanta&days=1&aqi=no&alerts=no
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

http: document.addEventListener("DOMContentLoaded", APP.init);
console.log(
  fetch(
    "http://api.weatherapi.com/v1/forecast.json?key=146bc6e955bc4674a65135729230707&q=Atlanta&days=1&aqi=no&alerts=no"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Hell");
      console.log(data.location.name);
    })
);
