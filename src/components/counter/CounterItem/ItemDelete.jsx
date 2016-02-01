'use strict';

var React = require('react'),
    Actions = require('../../../actions/CounterActions');

module.exports = React.createClass({
    render: function () {
        return (
            <button className="btn btn-default no-padding btn-action btn-small"
                    onClick={this.handleClick}
                    title="Delete">
                <i className="icon icon-small icon-delete" />
            </button>

        );
    },

    handleClick: function () {
        Actions.destroy(this.props.counter.id);
    }

});