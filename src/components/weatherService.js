import axios from 'axios';

const API_KEY = 'e286577a87f5a1c9b089a11c6506f0c4';

const weatherService = {
  getWeather: async (location) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
    const response = await axios.get(url);
    return response;
  },
};

export default weatherService;
