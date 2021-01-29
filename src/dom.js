const generateForm = () => {
    // Elements
    const mainContainer = document.querySelector(".main-container");

    // Empty Main Container
    mainContainer.textContent = '';
  
    // Append form wrapper div to main container
    const formWrapper = document.createElement("div");
    formWrapper.setAttribute("class", "form-wrapper");
    mainContainer.appendChild(formWrapper);

    // Append logo to wrapper
    const mainLogo = document.createElement("img");
    mainLogo.src = "cloudy.png";
    mainLogo.setAttribute("id", "main-logo");
    formWrapper.appendChild(mainLogo);

    // Append form to wrapper
    const mainForm = document.createElement("form");
    mainForm.setAttribute("class", "main-form");
    formWrapper.appendChild(mainForm);

    // Append input to form
    const formInput = document.createElement("input");
    formInput.setAttribute("id", "search-input");
    formInput.setAttribute("placeholder", "Enter a city");
    formInput.setAttribute("name", "q");
    formInput.autofocus = true;
    mainForm.appendChild(formInput);

    // Append button to form
    const formButton = document.createElement("button");
    formButton.setAttribute("id", "search-button");
    mainForm.appendChild(formButton);

    // Append icon to button
    const formButtonIcon = document.createElement("i");
    formButtonIcon.setAttribute("class", "fa fa-search");
    formButton.appendChild(formButtonIcon);
}

const generateWeatherResults = (weather) => {
    // Elements
    const mainContainer = document.querySelector(".main-container");

    // Empty Main Container
    mainContainer.textContent = '';

    // Append weather results div to main container
    const weatherResults = document.createElement("div");
    weatherResults.setAttribute("id", "weather-results");
    mainContainer.appendChild(weatherResults);

    // Append weather icon to weather results div
    const weatherIcon = document.createElement("img");
    weatherIcon.src = `http://openweathermap.org/img/wn/${weather.icon}@4x.png`;
    weatherIcon.setAttribute("id", "weather-icon");
    weatherResults.appendChild(weatherIcon);

    // Append weather description to weather results div
    const weatherDescription = document.createElement("p");
    weatherDescription.setAttribute("id", "weather-description");
    let weatherDescriptionText = document.createTextNode(weather.description);
    weatherDescription.appendChild(weatherDescriptionText);
    weatherResults.appendChild(weatherDescription);

    // Append city to weather results div
    const weatherCityCountry = document.createElement("p");
    weatherCityCountry.setAttribute("id", "weather-city-country");
    let weatherCityCountryText = document.createTextNode(`${weather.city},${weather.country}`);
    weatherCityCountry.appendChild(weatherCityCountryText);
    weatherResults.appendChild(weatherCityCountry);

    // Append temperature to weather results div
    const weatherTemperature = document.createElement("p");
    weatherTemperature.setAttribute("id", "weather-temperature");
    let weatherTemperatureText = document.createTextNode(`${weather.temperature}°C`);
    weatherTemperature.appendChild(weatherTemperatureText);
    weatherResults.appendChild(weatherTemperature);

    // Append temperature variations div to weather results div
    const weatherTemperatureVariationsDiv = document.createElement("div");
    weatherTemperatureVariationsDiv.setAttribute("id", "weather-temperature-variations-div");
    weatherResults.appendChild(weatherTemperatureVariationsDiv);   

    // Append temperature feels like div to temperature variations div
    const weatherTemperatureFeelsLikeDiv = document.createElement("div");
    weatherTemperatureFeelsLikeDiv.setAttribute("class", "weather-temperature-div");
    weatherTemperatureVariationsDiv.appendChild(weatherTemperatureFeelsLikeDiv);   

    // Append temperature feels like header to temperature feels like div
    const weatherTemperatureFeelsLikeHeader = document.createElement("p");
    weatherTemperatureFeelsLikeHeader.setAttribute("class", "weather-temperature-header");
    let weatherTemperatureFeelsLikeHeaderText = document.createTextNode(`Feels like:`);
    weatherTemperatureFeelsLikeHeader.appendChild(weatherTemperatureFeelsLikeHeaderText);
    weatherTemperatureFeelsLikeDiv.appendChild(weatherTemperatureFeelsLikeHeader); 

    // Append temperature feels like to temperature feels like div
    const weatherTemperatureFeelsLike = document.createElement("p");
    weatherTemperatureFeelsLike.setAttribute("id", "weather-temperature-feels-like");
    let weatherTemperatureFeelsLikeText = document.createTextNode(`${weather.feelsLike}°C`);
    weatherTemperatureFeelsLike.appendChild(weatherTemperatureFeelsLikeText);
    weatherTemperatureFeelsLikeDiv.appendChild(weatherTemperatureFeelsLike);   
    
    // Append minimum temperature div to temperature variations div
    const weatherMinimumTemperatureDiv = document.createElement("div");
    weatherMinimumTemperatureDiv.setAttribute("class", "weather-temperature-div");
    weatherTemperatureVariationsDiv.appendChild(weatherMinimumTemperatureDiv);   

    // Append minimum temperature header to minimum temperature div
    const weatherMinimumTemperatureHeader = document.createElement("p");
    weatherMinimumTemperatureHeader.setAttribute("class", "weather-temperature-header");
    let weatherMinimumTemperatureHeaderText = document.createTextNode(`Min:`);
    weatherMinimumTemperatureHeader.appendChild(weatherMinimumTemperatureHeaderText);
    weatherMinimumTemperatureDiv.appendChild(weatherMinimumTemperatureHeader); 

    // Append minimum temperature to minimum temperature div
    const weatherMinimumTemperature = document.createElement("p");
    weatherMinimumTemperature.setAttribute("id", "weather-minimum-temperature");
    let weatherMinimumTemperatureText = document.createTextNode(`${weather.minTemp}°C`);
    weatherMinimumTemperature.appendChild(weatherMinimumTemperatureText);
    weatherMinimumTemperatureDiv.appendChild(weatherMinimumTemperature);    

    // Append maximum temperature div to temperature variations div
    const weatherMaximumTemperatureDiv = document.createElement("div");
    weatherMaximumTemperatureDiv.setAttribute("class", "weather-temperature-div");
    weatherTemperatureVariationsDiv.appendChild(weatherMaximumTemperatureDiv);   

    // Append maximum temperature header to maximum temperature div
    const weatherMaximumTemperatureHeader = document.createElement("p");
    weatherMaximumTemperatureHeader.setAttribute("class", "weather-temperature-header");
    let weatherMaximumTemperatureHeaderText = document.createTextNode(`Max:`);
    weatherMaximumTemperatureHeader.appendChild(weatherMaximumTemperatureHeaderText);
    weatherMaximumTemperatureDiv.appendChild(weatherMaximumTemperatureHeader); 

    // Append maximum temperature to maximum temperature div
    const weatherMaximumTemperature = document.createElement("p");
    weatherMaximumTemperature.setAttribute("id", "weather-maximum-temperature");
    let weatherMaximumTemperatureText = document.createTextNode(`${weather.maxTemp}°C`);
    weatherMaximumTemperature.appendChild(weatherMaximumTemperatureText);
    weatherMaximumTemperatureDiv.appendChild(weatherMaximumTemperature);   
    
    // Append additional parameters div to weather results div
    const weatherAdditionalParametersDiv = document.createElement("div");
    weatherAdditionalParametersDiv.setAttribute("id", "weather-additional-parameters-div");
    weatherResults.appendChild(weatherAdditionalParametersDiv);   

    // Append humidity div to additional parameters div
    const weatherHumidityDiv = document.createElement("div");
    weatherHumidityDiv.setAttribute("id", "weather-humidity-div");
    weatherAdditionalParametersDiv.appendChild(weatherHumidityDiv);   

    // Append humidity header to humidity div
    const weatherHumidityHeader = document.createElement("p");
    weatherHumidityHeader.setAttribute("id", "weather-humidity-header");
    let weatherHumidityHeaderText = document.createTextNode(`Humidity:`);
    weatherHumidityHeader.appendChild(weatherHumidityHeaderText);
    weatherHumidityDiv.appendChild(weatherHumidityHeader); 

    // Append humidity to humidity div
    const weatherHumidity = document.createElement("p");
    weatherHumidity.setAttribute("id", "weather-humidity");
    let weatherHumidityText = document.createTextNode(`${weather.humidity}%`);
    weatherHumidity.appendChild(weatherHumidityText);
    weatherHumidityDiv.appendChild(weatherHumidity);    

    // Append pressure div to additional parameters div
    const weatherPressureDiv = document.createElement("div");
    weatherPressureDiv.setAttribute("id", "weather-pressure-div");
    weatherAdditionalParametersDiv.appendChild(weatherPressureDiv);   

    // Append pressure header to pressure div
    const weatherPressureHeader = document.createElement("p");
    weatherPressureHeader.setAttribute("id", "weather-pressure-header");
    let weatherPressureHeaderText = document.createTextNode(`Pressure:`);
    weatherPressureHeader.appendChild(weatherPressureHeaderText);
    weatherPressureDiv.appendChild(weatherPressureHeader); 

    // Append pressure to pressure div
    const weatherPressure = document.createElement("p");
    weatherPressure.setAttribute("id", "weather-pressure");
    let weatherPressureText = document.createTextNode(`${weather.pressure}mb`);
    weatherPressure.appendChild(weatherPressureText);
    weatherPressureDiv.appendChild(weatherPressure);  

    // Append sun times div to weather results div
    const weatherSunTimesDiv = document.createElement("div");
    weatherSunTimesDiv.setAttribute("id", "weather-sun-times-div");
    weatherResults.appendChild(weatherSunTimesDiv);   
    
    // Append sunrise div to sun times div
    const weatherSunriseDiv = document.createElement("div");
    weatherSunriseDiv.setAttribute("id", "weather-sunrise-div");
    weatherSunTimesDiv.appendChild(weatherSunriseDiv);   

    // Append sunrise header to sunrise div
    const weatherSunriseHeader = document.createElement("p");
    weatherSunriseHeader.setAttribute("id", "weather-sunrise-header");
    let weatherSunriseHeaderText = document.createTextNode(`Sunrise:`);
    weatherSunriseHeader.appendChild(weatherSunriseHeaderText);
    weatherSunriseDiv.appendChild(weatherSunriseHeader); 

    // Append sunrise to sunrise div
    const weatherSunrise = document.createElement("p");
    weatherSunrise.setAttribute("id", "weather-sunrise");
    let weatherSunriseText = document.createTextNode(`${weather.sunrise} AM`);
    weatherSunrise.appendChild(weatherSunriseText);
    weatherSunriseDiv.appendChild(weatherSunrise);  

    // Append sunset div to sun times div
    const weatherSunsetDiv = document.createElement("div");
    weatherSunsetDiv.setAttribute("id", "weather-sunset-div");
    weatherSunTimesDiv.appendChild(weatherSunsetDiv);   

    // Append sunset header to sunset div
    const weatherSunsetHeader = document.createElement("p");
    weatherSunsetHeader.setAttribute("id", "weather-sunset-header");
    let weatherSunsetHeaderText = document.createTextNode(`Sunset:`);
    weatherSunsetHeader.appendChild(weatherSunsetHeaderText);
    weatherSunsetDiv.appendChild(weatherSunsetHeader); 

    // Append sunset to sunset div
    const weatherSunset = document.createElement("p");
    weatherSunset.setAttribute("id", "weather-sunset");
    let weatherSunsetText = document.createTextNode(`${weather.sunset} PM`);
    weatherSunset.appendChild(weatherSunsetText);
    weatherSunsetDiv.appendChild(weatherSunset);  

    // Append weather units switch label to weather results div
    const weatherUnitsSwitchLabel = document.createElement("label");
    weatherUnitsSwitchLabel.setAttribute("class", "switch");
    weatherResults.appendChild(weatherUnitsSwitchLabel);  

    // Append weather units switch input to weather units switch label
    const weatherUnitsSwitchInput = document.createElement("input");
    weatherUnitsSwitchInput.setAttribute("type", "checkbox");
    weatherUnitsSwitchInput.setAttribute("id", "togbtn");
    weatherUnitsSwitchLabel.appendChild(weatherUnitsSwitchInput);  

    // Append weather units switch div to weather units switch label
    const weatherUnitsSwitchDiv = document.createElement("div");
    weatherUnitsSwitchDiv.setAttribute("class", "slider round");
    weatherUnitsSwitchLabel.appendChild(weatherUnitsSwitchDiv);  

    // Append weather units on switch span to weather units switch div
    const weatherUnitsSwitchCelciusSpan = document.createElement("span");
    let weatherUnitsSwitchCelciusSpanText = document.createTextNode("°C");
    weatherUnitsSwitchCelciusSpan.appendChild(weatherUnitsSwitchCelciusSpanText);
    weatherUnitsSwitchCelciusSpan.setAttribute("class", "off");
    weatherUnitsSwitchDiv.appendChild(weatherUnitsSwitchCelciusSpan); 

    // Append weather units off switch span to weather units switch div
    const weatherUnitsSwitchFarenheitSpan = document.createElement("span");
    let weatherUnitsSwitchFarenheitSpanText = document.createTextNode("°F");
    weatherUnitsSwitchFarenheitSpan.appendChild(weatherUnitsSwitchFarenheitSpanText);
    weatherUnitsSwitchFarenheitSpan.setAttribute("class", "on");
    weatherUnitsSwitchDiv.appendChild(weatherUnitsSwitchFarenheitSpan); 

    // Append restart span to weather results div
    const weatherRestartSpan = document.createElement("span");
    weatherRestartSpan.setAttribute("id", "weather-restart-span");
    weatherRestartSpan.addEventListener("click", generateForm); 
    weatherResults.appendChild(weatherRestartSpan);

    // Append restart icon to restart span
    const weatherRestartIcon = document.createElement("i");
    weatherRestartIcon.setAttribute("class", "fa fa-refresh");
    weatherRestartIcon.setAttribute("id", "weather-restart-icon");
    weatherRestartIcon.addEventListener("click", generateForm); 
    weatherResults.appendChild(weatherRestartIcon); 
}

// Module Exports
export {
    generateForm,
    generateWeatherResults,
};