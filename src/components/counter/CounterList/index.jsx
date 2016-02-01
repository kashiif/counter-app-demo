'use strict';

var React = require('react'),
    ReactCSSTransitionGroup = require('react-addons-css-transition-group'),
    CounterItem = require('../CounterItem');

module.exports = React.createClass({
    render: function () {
        var counterItems = this.props.counters.map(function (counter) {
                return (
                    <CounterItem key={counter.id} counter={counter}>
                        {counter.title}
                    </CounterItem>
                );
            });

        return (
            <ul className="list-unstyled counter-list no-overflow">
                <ReactCSSTransitionGroup transitionName="counteritem" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
                    {counterItems}
                </ReactCSSTransitionGroup>
            </ul>
        );
    }

});
