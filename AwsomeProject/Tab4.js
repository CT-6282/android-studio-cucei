import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const origin = {latitude: 20.654961472970044, longitude: -103.32535314445454};
const destination = {latitude: 20.71148054871335, longitude: -103.4121945519942};
const GOOGLE_MAPS_APIKEY = 'AIzaSyBKA4LC02aLcccvwgU0XdOhe_BzImQBjz4';
export default class Tab4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 20.654961472970044,
            longitude: -103.32535314445454,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <MapViewDirections
            origin={origin}
            destination={destination}
            strokeWidth={5}
            strokeColor="red"
            apikey={GOOGLE_MAPS_APIKEY}
            onReady={result => {
              console.log("La distancia entre CUCEI y Andares es " + result.distance + " km")
              console.log("La duración del recorrido será aprox " + result.duration + " min")
            }}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject
    },
   });