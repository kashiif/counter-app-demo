'use strict';

var React = require('react'),
    Actions = require('../../../actions/CounterActions');

module.exports = React.createClass({
    render: function () {
        return (
            <button className="btn btn-default no-padding btn-action btn-small"
                    onClick={this.handleClick}
                    title="Increment this counter">
                <i className="icon icon-small icon-plus" />
            </button>

        );
    },

    handleClick: function () {
        Actions.stepValue(this.props.counter.id, 1);
    }

});