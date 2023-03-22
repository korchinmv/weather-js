"use strict";

const API_KEY = "9a95a6d7fbfb4a18b55132621232203";
const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`;
const form = document.querySelector(".header__form");
const formInput = form.querySelector(".header__input");

const card = {
  card: ".weather-card",
  city: ".weather-card__city",
  country: ".weather-card__location",
  temperature: ".weather-card__temp",
  cloud: ".weather-card__cloud",
  image: ".weather-card__img",
};

const getApiResponse = (url, formInput) => {
  return fetch(`${url}${formInput.value.trim()}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally();
};

const renderCardInfo = (
  { card, city, country, temperature, cloud, image },
  data
) => {
  console.log(data);
  const cardWeather = document.querySelector(card);
  const cityCard = cardWeather.querySelector(city);
  const countryCard = cardWeather.querySelector(country);
  const tempCard = cardWeather.querySelector(temperature);
  const cloudCard = cardWeather.querySelector(cloud);
  const imageCard = cardWeather.querySelector(image);

  // cityCard.textContent = data.
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderCardInfo(card, getApiResponse(URL, formInput));
});
