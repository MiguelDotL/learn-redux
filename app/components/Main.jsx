// import React, { Component } from 'react';
//
// export default class Main extends Component {
//
// }

var React = require('react'),

    Nav = require('Nav'),

    Main = (props) => {
      return(
        <div>
          <Nav />
          <div className="row">
            <div className="columns small-centered medium-6 large-4">
              Main.jsx
              {props.children}
            </div>
          </div>
        </div>
      );
    };

module.exports = Main;
