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

const renderCardInfo = (
  { card, city, country, temperature, cloud, image },
  data
) => {
  const cardWeather = document.querySelector(card);
  const cityCard = cardWeather.querySelector(city);
  const countryCard = cardWeather.querySelector(country);
  const temperatureCard = cardWeather.querySelector(temperature);
  const cloudCard = cardWeather.querySelector(cloud);
  const imageCard = cardWeather.querySelector(image);

  cityCard.textContent = data.location.name;
  countryCard.textContent = data.location.country;
  temperatureCard.textContent = `${data.current.temp_c}°`;
};

const addCardInSection = () => {};

async function getApiResponse(url, formInput) {
  try {
    const response = await fetch(`${url}${formInput.value.trim()}`);
    const data = await response.json();

    if (data.error) {
      console.log(dada.error.message);
    }

    renderCardInfo(card, data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getApiResponse(URL, formInput);
});
