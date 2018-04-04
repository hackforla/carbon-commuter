import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Faq from './Faq';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
    <Route path="/faq" component={Faq} />
  </Router>, document.getElementById('root'));
registerServiceWorker();
