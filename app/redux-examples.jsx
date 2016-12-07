var redux = require('redux');

console.log('Starting redux example');


var oldReducer = (state = stateDefault, action) => {
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

// -------- nameReducer and action generators --------
var nameReducer = (state = "Anonymous", action) => {
  switch(action.type){
    case 'CHANGE_NAME':
      return action.name
    case 'CHANGE_NAME':
      return action.name
    default:
    return state;
  }
}

var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name
  }
}

// -------- hobbiesReducer and action generators --------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_HOBBY':
    return [
      ...state,
      {
        id: nextHobbyId++,
        hobby: action.hobby
      }
    ];
    case 'REMOVE_HOBBY':
    return state.filter((hobby) => hobby.id !== action.id);
    default:
    return state;
  }
}

var addHobby = (hobby) => {
  return {  type: 'ADD_HOBBY',
            hobby }
}

var removeHobby = (id) => {
  return {  type: 'REMOVE_HOBBY',
            id  }
}


// -------- moviesReducer and action generators --------
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          movieTitle: action.movieTitle,
          genre: action.genre
        }
      ]
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id);
    default:
      return state;
  }
}

var addMovie = (movieTitle, genre) => {
  return {  type: 'ADD_MOVIE',
            movieTitle,
            genre }
}

var removeMovie = (id) => {
  return {  type: 'REMOVE_MOVIE',
            id  }
}


var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

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


store.dispatch(changeName('Miguel'));
store.dispatch(addHobby('doing stuff'));
store.dispatch(addHobby('doing more stuff'));
store.dispatch(addMovie('Pulp Fiction','Action'));
store.dispatch(changeName('Joseph'));
store.dispatch(addMovie('Krampus','Thriller'));
store.dispatch(removeHobby(2));
store.dispatch(removeMovie(1));


// store.dispatch({
//   type: 'REMOVE_HOBBY',
//   id: 2
// });
//
// store.dispatch({
//   type: 'REMOVE_MOVIE',
//   id: 1
// });
