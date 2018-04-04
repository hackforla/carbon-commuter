import React, { Component } from 'react';
import GoogleApiWrapper from './MapContainer';
import './styles/App.css';

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
            <span className="app-title-click">faq</span>
            <span className="app-title-click">&nbsp;about</span>
            <span className="app-title-click">&nbsp;contact</span>
          </div>
          </h1>
        </header> 
      </div>
    );
  }
}

export default HeaderContainer;
