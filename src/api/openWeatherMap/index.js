const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}&units=imperial`;

export const getWeather = async (city, state) => {
  const response = await fetch(`${API_URL}&q=${city},${state}`);
  const json = await response.json();

  return {
    weatherMetadata: json.weather[0],
    temperature: json.main.temp,
    humidity: json.main.humidity,
    maxTemp: json.main.temp_max,
    minTemp: json.main.temp_min,
    name: json.name,
  };
};

const openWeatherMapApi = {
  getWeather,
};

export default openWeatherMapApi;
