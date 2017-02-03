var React = require('react');

var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;


// Link - wrapper for a[href='some'].
var Nav = React.createClass({
    render: function () {
        return (
           <nav>
            <div>Nav component</div>
            
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get weather</IndexLink>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
           </nav>
        );
    }
});

module.exports = Nav;