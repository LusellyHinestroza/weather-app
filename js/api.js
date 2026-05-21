import {
  GEO_URL,
  WEATHER_URL
} from "../config/constants.js";


export async function fetchWeather(city) {

  try {

    // =========================
    // Obtener coordenadas
    // =========================

    const geoResponse = await fetch(
      `${GEO_URL}?name=${city}&count=1&language=es&format=json`
    );

    // Validar respuesta
    if (!geoResponse.ok) {
      throw new Error(
        "Error al obtener ubicación"
      );
    }

    const geoData =
      await geoResponse.json();

    // Validar ciudad
    if (
      !geoData.results ||
      geoData.results.length === 0
    ) {
      throw new Error(
        "Ciudad no encontrada"
      );
    }

    const location =
      geoData.results[0];

    const latitude =
      location.latitude;

    const longitude =
      location.longitude;


    // =========================
    // Obtener clima
    // =========================

    const weatherResponse =
      await fetch(

        `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`

      );

    // Validar respuesta
    if (!weatherResponse.ok) {
      throw new Error(
        "Error al obtener clima"
      );
    }

    const weatherData =
      await weatherResponse.json();


    // =========================
    // Retornar datos
    // =========================

    return {

      city:
        location.name,

      country:
        location.country,

      temperature:
        weatherData.current_weather.temperature,

      windspeed:
        weatherData.current_weather.windspeed,

      weathercode:
        weatherData.current_weather.weathercode
    };

  } catch (error) {

    console.error(error);

    throw error;
  }

}