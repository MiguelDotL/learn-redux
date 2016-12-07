var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to changes
var unsibscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New State ', store.getState());

  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...'
  } else if(state.map.url) {
    document.getElementById('app').innerHTML = `<a href="${state.map.url}" target="_blank">View Your Location</a>`;

  }
});
// unsibscribe();


var currentState = store.getState();
console.log('currentState', currentState);


store.dispatch(actions.fetchLocation());


store.dispatch(actions.changeName('Miguel'));
store.dispatch(actions.addHobby('doing stuff'));
store.dispatch(actions.addHobby('doing more stuff'));
store.dispatch(actions.addMovie('Pulp Fiction','Action'));
store.dispatch(actions.changeName('Joseph'));
store.dispatch(actions.addMovie('Krampus','Thriller'));
store.dispatch(actions.removeHobby(2));
store.dispatch(actions.removeMovie(1));
