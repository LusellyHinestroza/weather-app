export function getWeatherDescription(
  weatherCode
) {

  switch (weatherCode) {

    case 0:
      return "☀️ Despejado";

    case 1:
    case 2:
    case 3:
      return "⛅ Parcialmente nublado";

    case 45:
    case 48:
      return "🌫️ Niebla";

    case 51:
    case 53:
    case 55:
      return "🌦️ Llovizna";

    case 61:
    case 63:
    case 65:
      return "🌧️ Lluvia";

    case 71:
    case 73:
    case 75:
      return "❄️ Nieve";

    case 95:
      return "⛈️ Tormenta";

    default:
      return "🌍 Clima desconocido";
  }
}


/*
 * Obtiene información meteorológica de una ciudad
 * utilizando la API de Open-Meteo.
 *
 * La función:
 * 1. Busca las coordenadas geográficas
 *    de la ciudad usando Geocoding API.
 * 2. Obtiene los datos del clima actual
 *    usando Forecast API.
 * 3. Retorna un objeto con la información
 *    meteorológica principal.
 *
 * @async
 * @function fetchWeather
 *
 * @param {string} city
 * Nombre de la ciudad que el usuario desea consultar.
 *
 * @returns {Promise<Object>}
 * Retorna una promesa con un objeto que contiene:
 *
 * @returns {string} returns.city
 * Nombre de la ciudad encontrada.
 *
 * @returns {string} returns.country
 * País de la ciudad.
 *
 * @returns {number} returns.temperature
 * Temperatura actual en grados Celsius.
 *
 * @returns {number} returns.windspeed
 * Velocidad del viento en km/h.
 *
 * @returns {number} returns.weathercode
 * Código meteorológico entregado por Open-Meteo.
 *
 * @throws {Error}
 * Lanza errores cuando:
 * - el input está vacío
 * - la ciudad no existe
 * - falla la conexión con la API
 * - los datos del clima no están disponibles
 *
 * @example
 * // Obtener clima de Bogotá
 *
 * fetchWeather("Bogotá")
 *   .then((data) => {
 *
 *     console.log(data);
 *
 *   })
 *   .catch((error) => {
 *
 *     console.error(error.message);
 *
 *   });
 *
 * @example
 * // Resultado esperado
 *
 * {
 *   city: "Bogotá",
 *   country: "Colombia",
 *   temperature: 18,
 *   windspeed: 10,
 *   weathercode: 2
 * }
 */