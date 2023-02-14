

const weather = (() => {

    async function getWeather(location) {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Slaughters,US,ky&APPID=4eee9c6ebad320d7c297db4525d20db9&units=imperial', {mode: 'cors'})
        const weatherData = await response.json()
        console.log(weatherData)
    }



    return {
        getWeather
    }

})();

export default weather;