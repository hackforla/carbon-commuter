import React, { Component } from 'react';
import {GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react';
import API from './api.json';
 
export class MapContainer extends React.Component {
  render() {
    return (
      <Map 
        google={this.props.google} 
        zoom={14}
      >
        <Marker 
          // onClick={this.onMarkerClick}
          name={'Current location'} 
        />
        <InfoWindow 
          // onClose={this.onInfoWindowClose}
        >
          <div>
            <h1>
              {/* {this.state.selectedPlace.name} */}
              hi
            </h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: API.apiKey
})(MapContainer)