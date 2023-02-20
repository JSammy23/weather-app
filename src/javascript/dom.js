import weather from "./weather";
import sun from '../assets/icons/sun.png'
import storm from '../assets/icons/storm.png'
import snow from '../assets/icons/snow.png'
import rain from '../assets/icons/rain.png'
import cloudy from '../assets/icons/cloudy.png'
import scatteredClouds from '../assets/icons/scatteredClouds.png'
import lightClouds from '../assets/icons/lightClouds.png'
import foggy from '../assets/icons/foggy.png'

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
        currentTemp.textContent = Math.round(weatherData.main.temp)
        relativeTemp.textContent = 'Feels like ' + Math.round(weatherData.main.feels_like)
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

    function revealCurrentWeather(){
        const currentWeather = document.getElementById('currentWeather');
        currentWeather.classList.remove('hide')
    }

    function displayWeatherIcon(weatherData) {
        const weatherIcon = document.getElementById('icon')
        const currentStatus = document.getElementById('currentStatusDiv')
        const iconCode = weatherData.weather[0].icon;
        const status = weatherData.weather[0].description
        const statusText = document.getElementById('currentStatus')

        statusText.textContent = '';
        statusText.textContent = status
        

        
        weatherIcon.src = getIcon(iconCode);

    }

    function getIcon(iconCode) { 
        switch(iconCode){
            case '01d':
                return sun
                break;
            case '02d':
                return lightClouds
                break;
            case '03d':
                return scatteredClouds
                break;
            case '04d':
                return cloudy
                break;
            case '09d':
                return rain
                break;
            case '10d':
                return rain
                break;
            case '11d':
                return storm
                break;
            case '13d':
                return snow
                break;
            case '50d':
                return foggy
                break;

        };
    }

    function displayForecast(forecastData) {
        const forecastDiv = document.getElementById('forecast')
        const forecastWrapper = document.getElementById('forecastWrapper')
        forecastWrapper.textContent = ''

        for (let i = 0; i < forecastData.list.length; i++) {
            const forecastCard = document.createElement('div')
            const status = document.createElement('p')
            const temp = document.createElement('p')
            const timestamp = document.createElement('p')


            status.classList.add('status')
            status.textContent = forecastData.list[i].weather[0].description;

            temp.textContent = Math.round(forecastData.list[i].main.temp);
            
            const datestamp = new Date(forecastData.list[i].dt * 1000)
            const time = datestamp.toLocaleTimeString();
            timestamp.textContent = time

            forecastCard.classList.add('forecast-card')
            forecastCard.append(status)
            forecastCard.append(temp)
            forecastCard.append(timestamp)
            forecastWrapper.append(forecastCard)
        }
    }

    










    return {
        displayCurrentWeather,
        revealCurrentWeather,
        displayForecast,
        displayWeatherIcon
    }

})();

export default dom;