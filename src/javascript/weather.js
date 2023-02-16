import dom from "./dom";

const weather = (() => {
    let weatherData;

    async function getWeather(zipcode) {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + '&APPID=4eee9c6ebad320d7c297db4525d20db9&units=imperial', {mode: 'cors'})
            let weatherData = await response.json()
            console.log(weatherData)
            dom.displayCurrentWeather(weatherData)
        } catch (err) {
            console.error(err)
            // Throw error to user
        }
    }



    return {
        getWeather,
        weatherData
    }

})();

export default weather;