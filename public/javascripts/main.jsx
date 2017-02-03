var React = require('react');
var ReactDOM = require('react-dom');
// var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Route = require('react-router').Route;
var Router = require('react-router').Router;
var indexRoute = require('react-router').indexRoute;
var hashHistory = require('react-router').hashHistory;

var Main = require('./components/Main');
var Nav = require('Nav');


var obj = {
  name: 'Daniil'
}

//render element
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}></Route>
  </Router>,
  document.getElementById('app')
)




