import React from 'react';
import GoogleApiWrapper from './MapContainer';
import SideBar from './SideBar';

export default props => (
  <div className="App-intro">
    <GoogleApiWrapper />
    <SideBar />
  </div>
)
