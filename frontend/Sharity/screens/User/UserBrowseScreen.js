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

function UserBrowseScreen({ navigation }) {
  return (
    <View>
      <Text>Browse Charities</Text>
      <TouchableOpacity onPress={() => navigation.navigate('MapView')}>
        <Text>Map View</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UserBrowseScreen;
