var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
// var Raven = require("raven-js");

// var sentryKey = '603a58c9cc874c7db5e0f9a21c158d45';
// var sentryApp = '99717';
// var sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp;

// Raven.config(sentryURL).install();

ReactDOM.render(routes, document.getElementById('app'));