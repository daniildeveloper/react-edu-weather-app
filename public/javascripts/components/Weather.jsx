var React = require("react");

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    render: function () {
        return (
            <section>
                <h3>Weather component</h3>
                <WeatherForm />
                <WeatherMessage />
            </section>
        );
    }
});

module.exports = Weather;