import {
  getWeatherDescription
} from "./utils.js";

/* =========================================
   MOSTRAR CLIMA
========================================= */

export function renderWeatherComparison(
  weatherDataArray
) {

  const resultContainer =
    document.getElementById(
      "weatherResult"
    );

  resultContainer.innerHTML =

    weatherDataArray.map(cityWeather => `

      <div class="weather-card">

        <div class="city-box">

          <h2>
            ${cityWeather.city}
          </h2>

          <span class="country">
            ${cityWeather.country}
          </span>

        </div>

        <div class="weather-info">

          <div class="weather-item">

            <span>
              🌡️ Temperatura
            </span>

            <span>
              ${cityWeather.temperature}°C
            </span>

          </div>

          <div class="weather-item">

            <span>
              💧 Humedad
            </span>

            <span>
              ${cityWeather.humidity}%
            </span>

          </div>

          <div class="weather-item">

            <span>
              💨 Viento
            </span>

            <span>
              ${cityWeather.windSpeed} km/h
            </span>

          </div>

          <div class="weather-item">

            <span>
              🌧️ Precipitación
            </span>

            <span>
              ${cityWeather.precipitation} mm
            </span>

          </div>

        </div>

        <div class="weather-status">

          ${getWeatherDescription(
            cityWeather.weatherCode
          )}

        </div>

      </div>

    `).join("");
}

/* =========================================
   ERROR
========================================= */

export function showError(message) {

  document.getElementById(
    "weatherResult"
  ).innerHTML = `

    <div class="error-box">
      ❌ ${message}
    </div>
  `;
}

/* =========================================
   LOADING
========================================= */

export function showLoading() {

  document.getElementById(
    "loading"
  ).style.display = "block";
}

export function hideLoading() {

  document.getElementById(
    "loading"
  ).style.display = "none";
}