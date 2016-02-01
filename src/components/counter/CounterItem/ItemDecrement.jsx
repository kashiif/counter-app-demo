'use strict';

var React = require('react'),
    Actions = require('../../../actions/CounterActions');

module.exports = React.createClass({
    render: function () {
        return (
            <button className="btn btn-default no-padding btn-action btn-small"
                    onClick={this.handleClick}
                    disabled={this.props.counter.count == 0}
                    title="Decrement this counter">
                <i className="icon icon-small icon-minus" />
            </button>

        );
    },

    handleClick: function () {
        Actions.stepValue(this.props.counter.id, -1);
    }

});