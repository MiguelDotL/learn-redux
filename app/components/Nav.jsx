var React = require('react'),
    { Link, IndexLink } = require('react-router');

var Nav = React.createClass({

      render: function() {
        return(
          <div className="top-bar">
            <div className="top-bar-left">
              <ul className="menu">
                <li className="menu-text">
                  {/* <img src="./images/components/nav/stopwatch.png" className="logo"></img> */}
                  LOGO Here
                </li>
                <li>  
                  <IndexLink to="/"
                    activeClassName="active-link"
                    >Home</IndexLink>
                </li>
                <li>
                  <Link to="/about"
                    activeClassName="active-link"
                    >About</Link>
                </li>
              </ul>
            </div>
            <div className="top-bar-right">
              <ul className="menu">
                <li className="menu-text">
                  Built by &nbsp;<a href="https://github.com/MiguelDotL" target="_blank">Miguel Lozano</a>
                </li>
              </ul>
            </div>
          </div>
        );
      }
    });

module.exports = Nav;
