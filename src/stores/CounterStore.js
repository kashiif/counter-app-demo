'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var constants = require('../constants/CounterConstants'),
    utils = require('../lib/utils'),
    appConfig = require('../app-config.json');


var CHANGE_EVENT = 'change';

var _counters = [];

/**
 * Create a counter item.
 * @param  {string} title The name of the counter
 */
function create(title) {
    var url = appConfig.host + appConfig.paths.counter;
    return utils.postJSON(url, {
        body: {
            title: title
        }
    }).then(_updateCounters);

}

/**
 * Delete a counter.
 * @param  {string} id
 */
function destroy(id) {
    var url = appConfig.host + appConfig.paths.counter;
    return utils.doHttpForJSON(url, {
        method: 'delete',
        body: {
            id: id
        }
    }).then(_updateCounters);
}

/**
 * Delete a counter.
 * @param  {string} id
 * @param  {Number} stepValue
 */
function stepCounterValue(id, stepValue) {
    stepValue |= stepValue;
    var url = appConfig.host + (stepValue > 0 ? appConfig.paths.counterInc : appConfig.paths.counterDec);

    return utils.postJSON(url, {
        body: {
            id: id
        }
    }).then(_updateCounters);
}

function getAll() {
    var url = appConfig.host + appConfig.paths.counters;
    utils.getJSON(url)
        .then(_updateCounters);
}

function _updateCounters(data){
    _counters = data;
    CounterStore.emit(CHANGE_EVENT);
    return Promise.resolve(data);
}


var CounterStore = _.assign({}, EventEmitter.prototype, {

    /**
     * Get the entire collection of Counters.
     * @returns {Array}
     */
    getAll: function() {
        return _counters;
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
    var title;

    switch(action.actionType) {
        case constants.COUNTER_CREATE:
            title = action.title.trim();
            if (title !== '') {
                create(title);
            }
            break;

        case constants.COUNTER_DESTROY:
            destroy(action.id);
            break;

        case constants.COUNTER_STEPVALUE:
            stepCounterValue(action.id, action.step);
            break;

        default:
        // no op
        console.debug('CounterStore: Unhandled action', action.actionType, action);

    }
});

// Load Counters from rest api
getAll();

module.exports = CounterStore;
