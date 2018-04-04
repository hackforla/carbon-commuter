import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer';
import './styles/App.css';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        {/* <div className="main-content">
          side
        </div> */}
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
