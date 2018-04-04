import React, { Component } from 'react';
import {GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react';
import API from './api.json';
 
export class MapContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      userLat: null,
      userLon: null,
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      console.log('pos >>>', pos.coords);
      this.setState({
        userLat: pos.coords.latitude,
        userLon: pos.coords.longitude
      });
    });
  }
  render() {
    const { userLat, userLon } = this.state;
    return (
      <Map 
        google={this.props.google} 
        center={{
          lat: userLat,
          lng: userLon
        }}
        zoom={14}
      >
        <Marker 
          onClick={this.onMarkerClick}
          name={'Current location'} 
        />
        <InfoWindow 
          onClose={this.onInfoWindowClose}
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
