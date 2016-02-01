'use strict';

var React = require('react'),
    Actions = require('../../../actions/CounterActions');

module.exports = React.createClass({
    getInitialState: function() {
        return {title: ''};
    },

    render: function() {
        return (
            <form className="margin-bottom-md" onSubmit={this.handleSubmit}>
                <div className="input-group input-group-lg">
                    <label htmlFor="txtCounterName" className="sr-only">Name of new counter</label>
                    <input name="txtCounterName" type="text" className="form-control" placeholder="Name of new counter" value={this.state.title}
                           onChange={this.handleChange}
                           onKeyDown={this.handleKeyDown}/>

                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={this.handleSubmit} title="Add new named counter">Add</button>
                        </span>
                </div>
            </form>
        );
    },

    handleSubmit: function(event) {
        event.preventDefault();

        if(!this.state.title.trim()) {
            return;
        }

        this._addCounter();

    },

    handleChange: function(event){
        this.setState({title: event.target.value});
    },

    handleKeyDown: function (event) {
/*
        if (event.keyCode !== ENTER_KEY) {
            return;
        }

        event.preventDefault();

        this._handleSubmit();
*/
    },

    _addCounter() {
        Actions.create(this.state.title);
        this.setState({title: ''});
    }
});