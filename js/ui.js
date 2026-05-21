import {
  getWeatherDescription
} from "./utils.js";

export function displayWeather(data) {

  const result =
    document.getElementById("weatherResult");

  result.innerHTML = `

    <h2>
      ${data.city}, ${data.country}
    </h2>

    <p class="temperature">
      ${data.temperature}°C
    </p>

    <p class="description">
      ${getWeatherDescription(data.weathercode)}
    </p>

    <p>
      💨 Viento:
      ${data.windspeed} km/h
    </p>

  `;
}

export function displayError(message) {

  const result =
    document.getElementById("weatherResult");

  result.innerHTML = `

    <p>
      ❌ ${message}
    </p>

  `;
}