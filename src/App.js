import React, { Component } from 'react';
import GoogleApiWrapper from './MapContainer';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Carbon Commuter</h1>
        </header>
        <p className="App-intro">
          <GoogleApiWrapper />
        </p>
      </div>
    );
  }
}

export default App;
