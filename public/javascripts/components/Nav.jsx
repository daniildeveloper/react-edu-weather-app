var React = require('react');

var Link = require('react-router').Link;


// Link - wrapper for a[href='some'].
var Nav = React.createClass({
    render: function () {
        return (
           <nav>
            <div>Nav component</div>
            
            <Link to="/">Get weather</Link>
            <Link to="/about">About</Link>
            <Link to="/examples">Example</Link>
           </nav>
        );
    }
});

module.exports = Nav;