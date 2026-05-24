import {
  GEO_API_URL,
  WEATHER_API_URL
} from "../config/constants.js";

import {
  saveWeatherCache,
  getWeatherCache,
  saveOfflineWeather,
  getOfflineWeather
} from "./cache.js";

/* =========================================
   OBTENER COORDENADAS
========================================= */

async function getCityCoordinates(
  cityName
) {

  if (!cityName || cityName.trim() === "") {

    throw new Error(
      "Debes escribir una ciudad"
    );
  }

  const cleanCityName =
    cityName.trim();

  const geoResponse =
    await fetch(

      `${GEO_API_URL}?name=${encodeURIComponent(cleanCityName)}&count=1&language=es&format=json`
    );

  if (!geoResponse.ok) {

    throw new Error(
      "Error al obtener ubicación"
    );
  }

  const geoData =
    await geoResponse.json();

  if (
    !geoData.results ||
    geoData.results.length === 0
  ) {

    throw new Error(
      `Ciudad no encontrada: ${cityName}`
    );
  }

  return geoData.results[0];
}

/* =========================================
   OBTENER CLIMA
========================================= */

async function getCurrentWeather(
  cityName
) {

  /* =========================================
     REVISAR CACHE
  ========================================= */

  const cachedWeather =
    getWeatherCache(cityName);

  /* =========================================
     VALIDAR CACHE VIEJO
  ========================================= */

  if (
    cachedWeather &&
    cachedWeather.humidity !== undefined &&
    cachedWeather.precipitation !== undefined
  ) {

    console.log("Usando cache");

    return cachedWeather;
  }

  try {

    /* =========================================
       COORDENADAS
    ========================================= */

    const cityData =
      await getCityCoordinates(
        cityName
      );

    const {
      latitude,
      longitude,
      name,
      country
    } = cityData;

    /* =========================================
       API OPTIMIZADA
    ========================================= */

    const weatherResponse =
      await fetch(

        `${WEATHER_API_URL}?latitude=${latitude}&longitude=${longitude}` +
        `&current=` +
        `temperature_2m,` +
        `relative_humidity_2m,` +
        `wind_speed_10m,` +
        `precipitation,` +
        `weather_code` +
        `&timezone=auto`
      );

    if (!weatherResponse.ok) {

      throw new Error(
        "Error al obtener clima"
      );
    }

    const weatherData =
      await weatherResponse.json();

    const currentWeather =
      weatherData.current;

    /* =========================================
       DATOS FORMATEADOS
    ========================================= */

    const formattedWeather = {

      city: name,

      country: country,

      temperature:
        currentWeather.temperature_2m ?? 0,

      humidity:
        currentWeather.relative_humidity_2m ?? 0,

      windSpeed:
        currentWeather.wind_speed_10m ?? 0,

      precipitation:
        currentWeather.precipitation ?? 0,

      weatherCode:
        currentWeather.weather_code ?? 0
    };

    /* =========================================
       GUARDAR CACHE
    ========================================= */

    saveWeatherCache(
      cityName,
      formattedWeather
    );

    /* =========================================
       GUARDAR OFFLINE
    ========================================= */

    saveOfflineWeather(
      cityName,
      formattedWeather
    );

    return formattedWeather;

  } catch (error) {

    /* =========================================
       MODO OFFLINE
    ========================================= */

    const offlineWeather =
      getOfflineWeather(cityName);

    if (offlineWeather) {

      console.log(
        "Usando datos offline"
      );

      return offlineWeather;
    }

    throw new Error(
      "No se pudo obtener el clima"
    );
  }
}

/* =========================================
   VARIAS CIUDADES
========================================= */

export async function getWeatherForMultipleCities(
  cityList = []
) {

  if (
    !Array.isArray(cityList) ||
    cityList.length === 0
  ) {

    throw new Error(
      "Debes ingresar ciudades"
    );
  }

  const weatherResults =
    await Promise.all(

      cityList.map(city =>

        getCurrentWeather(city)
      )
    );

  return weatherResults;
}