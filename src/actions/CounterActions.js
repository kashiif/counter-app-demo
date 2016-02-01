var AppDispatcher = require('../dispatcher/AppDispatcher');
var constants = require('../constants/CounterConstants');

var CounterActions = {

    /**
     * @param  {string} title
     */
    create: function (title) {
        AppDispatcher.dispatch({
            actionType: constants.COUNTER_CREATE,
            title: title
        });
    },

    /**
     * @param  {string} id
     */
    destroy: function (id) {
        AppDispatcher.dispatch({
            actionType: constants.COUNTER_DESTROY,
            id: id
        });
    },

    /**
     * @param  {string} id
     * @param  {Number} step
     */
    stepValue: function (id, step) {
        AppDispatcher.dispatch({
            actionType: constants.COUNTER_STEPVALUE,
            id: id,
            step: step
        });
    }

};

module.exports = CounterActions;
