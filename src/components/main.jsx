'use strict';

require('../styles/base.css');

var React = require('react'),
    ReactDOM = require('react-dom'),
    App = require('./App');

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
