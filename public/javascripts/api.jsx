var axios = require('axios');

var OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b0c2b74a55241516bf75c51479c46e02';

// b0c2b74a55241516bf75c51479c46e02
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b0c2b74a55241516bf75c51479c46e02
module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = OPEN_WEATHER_MAP_URL + "&q=" + location;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (err) {
            throw new Error(err.data.message);
        });

    }
}