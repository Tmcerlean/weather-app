// Module Imports
import {
    generateForm,
    generateWeatherResults
} from "./dom.js";
import './styles.css';

// Init
generateForm();

// Elements
const searchLocationInput = document.querySelector("#search-input");
const searchLocationButton = document.querySelector("#search-button");

// Event Listener
searchLocationButton.addEventListener("click", (event) => {
    event.preventDefault();
    newWeatherRequest(searchLocationInput.value);
});

// Query Weather API
async function getData(location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=efbc4664f78b87a453c5a9b7ed953d97`, {mode: 'cors'})
        const weatherData = await response.json();
        return weatherData;
    } catch (err) {
        alert(err);
    }
}

// Process JSON Weather Data
function processWeatherData(weatherData) {

    // Create Weather Object
    let weather = {
        temperature: weatherData.main.temp,
        feelsLike: weatherData.main.feels_like,
        humidity: weatherData.main.humidity,
        pressure: weatherData.main.pressure,
        minTemp: weatherData.main.temp_min,
        maxTemp: weatherData.main.temp_max,
        clouds: weatherData.clouds.all,
        city: weatherData.name,
        country: weatherData.sys.country,
        sunrise: weatherData.sys.sunrise,
        sunset: weatherData.sys.sunset,
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
        windDirection: weatherData.wind.deg,
        windSpeed: weatherData.wind.speed
    };

    // Convert temperature values from Kelvin to Celcius
    weather.temperature = Math.round((weather.temperature - 273.15)*10)/10;
    weather.feelsLike = Math.round((weather.feelsLike - 273.15)*10)/10;
    weather.minTemp = Math.round((weather.minTemp - 273.15)*10)/10;
    weather.maxTemp = Math.round((weather.maxTemp - 273.15)*10)/10;

    // Function to convert sunrise UNIX timestamp to 24h
    let sunriseTimestamp = weather.sunrise;
    let sunriseDate = new Date(sunriseTimestamp * 1000);
    let sunriseHours = sunriseDate.getHours();
    let sunriseMinutes = "0" + sunriseDate.getMinutes();
    let sunriseFormattedTime = sunriseHours + ':' + sunriseMinutes.substr(-2);
    weather.sunrise = sunriseFormattedTime;

    // Function to convert sunset UNIX timestamp to 24h
    let sunsetTimestamp = weather.sunset;
    let sunsetDate = new Date(sunsetTimestamp * 1000);
    let sunsetHours = sunsetDate.getHours();
    let sunsetMinutes = "0" + sunsetDate.getMinutes();
    let sunsetFormattedTime = sunsetHours + ':' + sunsetMinutes.substr(-2);
    weather.sunset = sunsetFormattedTime;

    return weather;
}

// Request Handler
async function newWeatherRequest(location) {
    if (location !== '') {
        try {
            const dataRequest = await getData(location);    // Get data from API
            const weather = await processWeatherData(dataRequest);    // Process data
            // Populate page - Pass weather variable to DOM generateWeatherResults function
            generateWeatherResults(weather);
        } catch (err) {
            alert(err);
        }
    }
}

// Module Exports
export {
    
};




