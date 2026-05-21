import {
  fetchWeather
} from "./api.js";

import {
  displayWeather,
  displayError
} from "./ui.js";

const button =
  document.getElementById("searchBtn");

const cityInput =
  document.getElementById("cityInput");


// Buscar con botón
button.addEventListener(
  "click",
  searchWeather
);


// Buscar con Enter
cityInput.addEventListener(
  "keypress",
  (event) => {

    if (event.key === "Enter") {
      searchWeather();
    }

  }
);


async function searchWeather() {

  const city =
    cityInput.value.trim();

  if (!city) {

    displayError(
      "Escribe una ciudad"
    );

    return;
  }

  try {

    const data =
      await fetchWeather(city);

    displayWeather(data);

  } catch (error) {

    displayError(error.message);

    console.error(error);

  }

}