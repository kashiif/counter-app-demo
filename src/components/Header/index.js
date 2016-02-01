'use strict';

var React = require('react');

module.exports = React.createClass({
    render: function () {
        return (
            <header className="col-xs-12">
                <h1 className="text-center">Howdy Counters!
                    <span className="pull-right">{this.props.count > 0 ? this.props.count : ''}</span>
                </h1>
            </header>
        );
    }


});
