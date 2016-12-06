var redux = require('redux');

console.log('Starting redux example');

// // PureFunctions
// // 01 // input arguments do not get mutated
// // 02 // only local vars, no outside vars
// // 03 // AVOID  promises and async calls, like db calls or http requests
//
//
// // pureFunction
// function add(a, b) {
//   return a + b;
// }
//
// // notPure
// var a = 3
//
// function sum(b) {
//   return a + b;
// }
//
// // alsoNotPure
// var result;
// function add(a, b) {
//   result = a + b;
//   return result;
// }
//
// // suchNotPure
// function add(a, b) {
//   return a + b + new Date().getSeconds();
// }
//
// // pureFunctions cannot mutate arguments
//
//
// function changeProp(obj) {
//   // // PassingByReference
//   // obj.name = 'Jen';
//   // return obj
//
//   // PassingByValue
//    return {
//      ...obj,
//      name: 'Jen'
//    }
// }
//
// var startingValue = {
//   name: 'Miguel',
//   age: 27
// }
//
// var res = changeProp(startingValue);
// console.log(startingValue);
// console.log(res);


var reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'};

  switch(action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
      default:
        return state;
  }
};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsibscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is ', state.name);
  document.getElementById('app').innerHTML = state.name;
});
// unsibscribe();


var currentState = store.getState();
console.log('currentState', currentState);


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Miguel',
});


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Joseph',
});
