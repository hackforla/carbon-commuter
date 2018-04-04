import React, { Component } from 'react';
import GoogleApiWrapper from './MapContainer';
import './styles/App.css';
import { Link } from 'react-router-dom';

class HeaderContainer extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title app-no-spacing app-space-between">
          <div>
            <span>
              Carbon Commuter,
            </span>
            <span className="app-title-tagline">
              &nbsp;Where We Try to Convince You to Take Public Transportation
            </span>
          </div>
          <div>
            <span className="app-title-click"><Link to="/">Home</Link></span>
            <span className="app-title-click"><Link to="/about">About</Link></span>
          </div>
          </h1>
        </header> 
      </div>
    );
  }
}

export default HeaderContainer;
