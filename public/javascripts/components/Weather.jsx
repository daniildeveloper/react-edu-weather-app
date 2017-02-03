var React = require("react");
var API = require("API");

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            location: 'Almaty',
            temp: 32
        }
    },
    handleSearch: function (location) {
        var that = this;
        API.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp
            })
         }, function (err) {console.error(err) });
        this.setState({
            location: location,
            temp: 23
        });
    },
    render: function () {
        var temp = this.state.temp;
        var location = this.state.location;
        return (
            <section>
                <h3>Weather component</h3>

                <WeatherForm onSearch={this.handleSearch} />
                <WeatherMessage temp={temp} location={location} />
            </section>
        );
    }
});

module.exports = Weather;