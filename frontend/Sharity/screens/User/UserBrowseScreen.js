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

const { height } = Dimensions.get('window');

function UserBrowseScreen({ navigation }) {
  return (
    <View style = {{backgroundColor: '#fff', height: height}}>
      <Text style = {styles.header}>Donate</Text>
      <Text style = {styles.subtitle}>to a shelter</Text>
      
      <TouchableOpacity onPress={() => navigation.navigate('MapView')}>
        <Text>Map View</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50, 
    marginLeft: 30, 
    fontFamily: 'Inter-Bold', 
    fontSize: 30
  },
  subtitle: { 
    marginLeft: 30, 
    fontFamily: 'Inter-regular', 
    fontSize: 30
  }
});
export default UserBrowseScreen;
