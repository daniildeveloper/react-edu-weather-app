var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
    render: function () {
        return (
            <section>
                <Nav />
                <h2>Main Component</h2>
                {this.props.children}
            </section>

        );
    }
});

module.exports = Main;