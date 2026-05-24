import {
  getWeatherForMultipleCities
} from "./api.js";

import {
  renderWeatherComparison,
  showError,
  showLoading,
  hideLoading
} from "./ui.js";

/* =========================================
   BOTÓN BUSCAR
========================================= */

document
  .getElementById("searchBtn")
  .addEventListener("click", async () => {

    const cityInput =
      document.getElementById(
        "cityInput"
      ).value;

    const cityList =

      cityInput
        .split(",")
        .map(city => city.trim())
        .filter(city => city !== "");

    try {

      showLoading();

      const weatherData =

        await getWeatherForMultipleCities(
          cityList
        );

      renderWeatherComparison(
        weatherData
      );

    } catch (error) {

      showError(error.message);

    } finally {

      hideLoading();
    }
  });