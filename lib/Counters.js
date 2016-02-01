'use strict';

var _ = require("lodash");
var __Counters = {};

module.exports = {
  all    : getAll,
  create : create,
  inc    : applyTo("count", inc),
  dec    : applyTo("count", dec),
  delete : del
};

function genId() {
  return (+new Date() + ~~(Math.random * 999999)).toString(36);
}

function getAll() { return _.map(__Counters, _.identity); }

function create(title) {
  var id = genId();
  __Counters[id] = {id: id, title: title, count: 0};
  return getAll();
}

function del(id) {
  console.log('deleting', id, __Counters[id]);

  delete __Counters[id];

  var all = getAll();

  console.log('after deleting', id, __Counters[id], all);

  return all;
}

function applyTo(key, fn) {
  return function(id) {
    __Counters[id][key] = fn(__Counters[id][key]);
    return getAll();
  }
}

function inc(n) { return n + 1; }
function dec(n) { return n - 1; }


