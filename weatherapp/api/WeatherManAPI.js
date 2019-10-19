import axios from 'axios';
const API_KEY = '137ff3b476eed449a0b06658eb43d86a';
const basePath = 'https://api.openweathermap.org/data/2.5/weather?q=';

const WeatherManAPI = {
    async getWeather(cityname) {
        const result = await axios.get( `${basePath}${cityname}&appid=${API_KEY}`); 
        const { data: { name, weather: [first], sys: { country }, main: {temp}}} = result;
        const { description } = first;
        return {
            name,
            description,
            country,
            temp
        }
    },
    async getWeatherWithCoord(lat, lon) {
        const coOrd = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`
        const result = await axios.get( `${coOrd}&appid=${API_KEY}`); 
        const { data: { name, weather: [first], sys: { country }, main: {temp}}} = result;
        const { description } = first;
        return {
            name,
            description,
            country,
            temp
        }
    }
    
}

export default WeatherManAPI;
