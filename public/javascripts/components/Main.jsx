var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
    render: function () {
        return (
            <section>
                <Nav />
                <h2>Main Component</h2>
            </section>

        );
    }
});

module.exports = Main;