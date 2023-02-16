import weather from "./weather";

const dom = (() => {
    function displayCurrentWeather(weatherData) {
        const currentTemp = document.getElementById('currentTemp');
        const relativeTemp = document.getElementById('relativeTemp');
        const currentCity = document.getElementById('currentCity');
        const windSpeed = document.getElementById('windSpeed');
        const windGust = document.getElementById('gust');
        const humidity = document.getElementById('humidity');
        const sunrise = document.getElementById('sunrise');
        const sunset = document.getElementById('sunset');

        // Temp Stats
        currentTemp.textContent = weatherData.main.temp
        relativeTemp.textContent = 'Feels like ' + weatherData.main.feels_like
        humidity.textContent = 'Humidity ' + weatherData.main.humidity

        // City
        currentCity.textContent = weatherData.name

        // ----  Weather Table  ---- //

        // Wind
        windSpeed.textContent = weatherData.wind.speed
        windGust.textContent = weatherData.wind.gust
        
        // Sunrise & Sunset
        const sunriseDate = new Date(weatherData.sys.sunrise * 1000)
        const sunriseTime = sunriseDate.toLocaleTimeString()
        sunrise.textContent = sunriseTime

        const sunsetDate = new Date(weatherData.sys.sunset * 1000)
        const sunsetTime = sunsetDate.toLocaleTimeString()
        sunset.textContent = sunsetTime

    }










    return {
        displayCurrentWeather
    }

})();

export default dom;