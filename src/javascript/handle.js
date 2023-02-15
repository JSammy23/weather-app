import weather from "./weather";

const handle = (() => {
    const searchForm = document.getElementById('searchForm');


    function listenForSearch() {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault()
            const zipcode = document.getElementById('searchItem').value;
            weather.getWeather(zipcode)
            searchForm.reset()
        })
    };


    return {
        listenForSearch
    }

})();

export default handle;