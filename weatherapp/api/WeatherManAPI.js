import axios from 'axios';
const API_KEY = '137ff3b476eed449a0b06658eb43d86a';
const basePath = 'https://api.openweathermap.org/data/2.5/weather?q=';

const WeatherManAPI = {
    async getWeather(cityname) {
        return await axios.get( `${basePath}${cityname}&appid=${API_KEY}`);
    }
}

export default WeatherManAPI;
