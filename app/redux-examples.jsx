var redux = require('redux');

console.log('Starting redux example');

// PureFunctions
// 01 // input arguments do not get mutated
// 02 // only local vars, no outside vars
// 03 // AVOID  promises and async calls, like db calls or http requests


// pureFunction
function add(a, b) {
  return a + b;
}

// notPure
var a = 3

function sum(b) {
  return a + b;
}

// alsoNotPure
var result;
function add(a, b) {
  result = a + b;
  return result;
}

// suchNotPure
function add(a, b) {
  return a + b + new Date().getSeconds();
}

// pureFunctions cannot mutate arguments


function changeProp(obj) {
  // // PassingByReference
  // obj.name = 'Jen';
  // return obj

  // PassingByValue
   return {
     ...obj,
     name: 'Jen'
   }
}

var startingValue = {
  name: 'Miguel',
  age: 27
}

var res = changeProp(startingValue);
console.log(startingValue);
console.log(res);


var reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'};
  return state;
}

var store = redux.createStore(reducer);


var currentState = store.getState();
console.log('currentState', currentState);
