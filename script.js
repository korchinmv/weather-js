"use strict";

const API_KEY = "9a95a6d7fbfb4a18b55132621232203";
const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London`;

const response = fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
