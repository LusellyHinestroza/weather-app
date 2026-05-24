/* =========================================
   DURACIÓN DEL CACHE
========================================= */

const CACHE_DURATION =
  60 * 60 * 1000;

/* =========================================
   GUARDAR CACHE
========================================= */

export function saveWeatherCache(
  cityName,
  weatherData
) {

  const cacheData = {

    data: weatherData,

    timestamp: Date.now()
  };

  localStorage.setItem(

    `weather_${cityName.toLowerCase()}`,

    JSON.stringify(cacheData)
  );
}

/* =========================================
   OBTENER CACHE
========================================= */

export function getWeatherCache(
  cityName
) {

  const savedData = localStorage.getItem(

    `weather_${cityName.toLowerCase()}`
  );

  if (!savedData) {

    return null;
  }

  const parsedData =
    JSON.parse(savedData);

  const cacheAge =
    Date.now() -
    parsedData.timestamp;

  if (cacheAge > CACHE_DURATION) {

    localStorage.removeItem(

      `weather_${cityName.toLowerCase()}`
    );

    return null;
  }

  return parsedData.data;
}

/* =========================================
   GUARDAR OFFLINE
========================================= */

export function saveOfflineWeather(
  cityName,
  weatherData
) {

  localStorage.setItem(

    `offline_${cityName.toLowerCase()}`,

    JSON.stringify(weatherData)
  );
}

/* =========================================
   OBTENER OFFLINE
========================================= */

export function getOfflineWeather(
  cityName
) {

  const offlineData =
    localStorage.getItem(

      `offline_${cityName.toLowerCase()}`
    );

  if (!offlineData) {

    return null;
  }

  return JSON.parse(
    offlineData
  );
}