var axios = require('axios');

// -------- nameReducer and action generators --------

export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name
  }
}

// -------- hobbiesReducer and action generators --------


export var addHobby = (hobby) => {
  return {  type: 'ADD_HOBBY',
            hobby }
}

export var removeHobby = (id) => {
  return {  type: 'REMOVE_HOBBY',
            id  }
}


// -------- moviesReducer and action generators --------


export var addMovie = (movieTitle, genre) => {
  return {  type: 'ADD_MOVIE',
            movieTitle,
            genre }
}

export var removeMovie = (id) => {
  return {  type: 'REMOVE_MOVIE',
            id  }
}

// -------- moviesReducer and action generators --------


export var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH',
  };
};

export var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  };
};

export var fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());
    axios.get('http://ipinfo.io').then(function(res) {
      var loc = res.data.loc;
      var baseULR = 'http://maps.google.com?q=';

      dispatch(completeLocationFetch(baseULR + loc));
    })
  }
};
