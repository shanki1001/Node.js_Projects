const axios = require("axios");

const API_KEY = "3aa79a732be5389353371e7450ddd4a1";

const getWeather = async (city) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = res.data;
    console.log(`Weather in ${data.name}:`);
    console.log(`Temperature: ${data.main.temp}`);
    console.log(`Description: ${data.weather[0].description}`);
  } catch (err) {
    console.log(
      " Error fetching weather data. Check the city name or your API key."
    );
  }
};
module.exports = getWeather;
