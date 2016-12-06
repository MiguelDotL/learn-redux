var React = require('react'),
    ReactDOM = require('react-dom'),
    { Route,
      Router,
      IndexRoute,
      hashHistory } = require('react-router'),

    Main = require('Main'),
    Home = require('Home'),
    About = require('About');


$(document).foundation();

// require('style!css!../app/styles/style.css')
require('style!css!sass!styles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('app')
);

// require('./redux-examples.jsx');
require('./redux-todo-example.jsx');
