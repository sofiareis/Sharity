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

function MapViewScreen({ navigation }) {
  return (
    <View>
      <Text>Browse Map</Text>
      <TouchableOpacity onPress={() => navigation.navigate('UserBrowse')}>
        <Text>Browse View</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MapViewScreen;
