import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

function MapViewScreen({ navigation }) {
  return (
    <View style={styles.mapcontainer}>
     <MapView
         provider={PROVIDER_GOOGLE}
         style={styles.map}
         initialRegion={{
           latitude: 37.78825,
           longitude: -122.4324,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
         showUserLocation={true} >
         <Marker coordinate={{
           latitude: 37.78825,
           longitude: -122.4324,
         }}  />
     </MapView>
   </View>);
}

const styles = StyleSheet.create({
  mapcontainer: {
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
  },
  map: {
        ...StyleSheet.absoluteFillObject,
  },
})

export default MapViewScreen;
