import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import UserBrowseScreen from '../screens/User/UserBrowseScreen.js';
import MapViewScreen from '../screens/User/MapViewScreen.js';
import Shelter1Screen from '../screens/User/Shelter1Screen.js'

const Stack = createStackNavigator();

function UserBrowseStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="UserBrowse"
                      screenOptions={{
                          headerShown: false,
                      }}>
      <Stack.Screen name="UserBrowse" component={UserBrowseScreen} />
      <Stack.Screen name="MapView" component={MapViewScreen} />
      <Stack.Screen name="Shelter1" component={Shelter1Screen} />
    </Stack.Navigator>
  );
}

export default UserBrowseStack;
