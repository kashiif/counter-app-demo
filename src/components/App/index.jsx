'use strict';


var React = require('react'),
    store = require('../../stores/CounterStore'),
    AppHeader = require('../Header'),
    CounterForm = require('../counter/CounterForm'),
    CounterBox = require('../counter/CounterBox');

/**
 * Retrieve the current Counters from CounterStore
 */
function getCountersState() {
    return {
        counters: store.getAll()
    };
}

module.exports = React.createClass({
    getInitialState: function () {
        return getCountersState();
    },

    getTotalCount: function() {
        var sum = 0;

        this.state.counters.map(function (item) {
            sum +=  item.count;
        });

        return sum;
    },

    componentDidMount: function() {
        store.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        store.removeChangeListener(this._onChange);
    },

    render: function () {
        return (
            <div className="relative full-height">
                <div className="app-header">
                    <AppHeader count={this.getTotalCount()}/>
                    <CounterForm />
                </div>
                <div className="app-body">
                    <CounterBox counters={this.state.counters} />
                </div>
            </div>
        );
    },

    /**
     * Handles 'change' events coming from the CountersStore
     */
    _onChange: function() {
        // update UI to reflect change in state
        this.setState(getCountersState());
    }

});



