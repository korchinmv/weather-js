"use strict";

const API_KEY = "9a95a6d7fbfb4a18b55132621232203";
const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`;
const form = document.querySelector(".header__form");
const formInput = form.querySelector(".header__input");
const cardWeather = document.querySelector(".weather-card");

function renderCard(card, name, country, temp, text) {
  card.innerHTML = `
	<h2 class="weather-card__title">Погода на сегодня</h2>
	<div class="weather-card__wrapper">	
	  <div class="weather-card__info">
			<h2 class="weather-card__city">${name}</h2>
		  	<span class="weather-card__location">${country}</span>
			  <span class="weather-card__temp">${temp}°</span>
		   <p class="weather-card__cloud">${text}</p>
	  </div>
	  <img class="weather-card__img" src="../img/animated/${getImage(
      text
    )}" alt="Погода">
	</div>
	`;

  card.style.justifyContent = "space-between";
}

function getImage(text) {
  const value = text.toLowerCase();

  switch (value) {
    case "light rain":
      return "rainy-1.svg";

    case "sunny":
      return "clear-day.svg";

    case "snow":
      return "snowy-3.svg";

    case "partly cloudy":
      return "cloudy-2-day.svg";
  }
}

async function getApiResponse(url, formInput) {
  try {
    const response = await fetch(`${url}${formInput.value.trim()}`);
    const data = await response.json();
    console.log(data);

    const {
      current: {
        condition: { text },
        is_day: isDay,
        temp_c: temp,
        wind_mph: wind,
      },
      location: { name, country, localtime },
    } = data;

    renderCard(cardWeather, name, country, temp, text);
  } catch (err) {
    console.log(err);
    cardWeather.textContent = "Не верно указан город или такого города нет";
    cardWeather.style.justifyContent = "center";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getApiResponse(URL, formInput);
  cardWeather.classList.remove("hide");
});
