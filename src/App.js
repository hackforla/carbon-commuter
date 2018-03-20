import React, { Component } from 'react';
import GoogleApiWrapper from './MapContainer';
import HeaderContainer from './HeaderContainer';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        {/* <div className="main-content">
          side
        </div> */}
        <div className="App-intro">
          <GoogleApiWrapper />
        </div>
      </div>
    );
  }
}

export default App;
