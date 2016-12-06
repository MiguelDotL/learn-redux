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
var stateDefault = {
    name: 'Anonymous',
    movies: [],
    hobbies: []
}

var nextMovieId = 1;
var nextHobbyId = 1;

var reducer = (state = stateDefault, action) => {
  // state = state || {name: 'Anonymous'};

  switch(action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            movieTitle: action.movieTitle,
            genre: action.genre
          }
        ]
      };
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.id)
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
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

  console.log('New State ', store.getState());
});
// unsibscribe();


var currentState = store.getState();
console.log('currentState', currentState);


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Miguel',
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'doing stuff'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'doing more stuff'
});

store.dispatch({
  type: 'ADD_MOVIE',
  movieTitle: 'Pulp Fiction',
  genre: 'Action'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Joseph',
});

store.dispatch({
  type: 'ADD_MOVIE',
  movieTitle: 'Krampus',
  genre: 'Thriller'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});
