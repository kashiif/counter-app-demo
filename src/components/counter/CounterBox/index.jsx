'use strict';

var React = require('react'),
    CounterList = require('../CounterList');

module.exports = React.createClass({

    render: function () {
        return (
            <div className="counterbox">
                <CounterList counters={this.props.counters}/>
            </div>
        );
    }
});
