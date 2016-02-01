'use strict';

var _ = require('lodash');


function get(url, options) {
    var allOptions = {
            method: 'GET'
        };

    _.assign(allOptions, options);

    return fetch(new Request(url, allOptions));
}


function doHttpForJSON(url, options) {

    var body;
    options = _.assign({}, options, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    if (options) {
        body = options.body;

        if (body && typeof body == 'object') {
            options = _.assign({}, options);
            options.body = JSON.stringify(body);
        }
    }

    return get(url, options).then(function (response) {
        return response.json();
    });
}

exports.get = get;
exports.doHttpForJSON = doHttpForJSON;


exports.postJSON = function (url, options) {

    var postOptions = {};

    _.assign(postOptions, options, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    return doHttpForJSON(url, postOptions);
};


exports.getJSON = function (url, options) {
    return doHttpForJSON(url, options);
};

