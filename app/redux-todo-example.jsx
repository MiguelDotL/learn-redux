var redux = require('redux');

console.log('initializing application...');

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
};


var reducer = (state = stateDefault, action) => {
  switch(action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.subscribe(() => {
  var state = store.getState();

  console.log('searchText is ', state.name );
  document.getElementById('app').innerHTML = state.searchText;
});

console.log('currentState', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'work'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'play'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'sleep'
});
