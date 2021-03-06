import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import CharityAccountScreen from '../screens/Charity/CharityAccountScreen.js';
import ChatScreen from '../screens/ChatScreen.js';

const Stack = createStackNavigator();

function CharityAccountStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="CharityAccount"
                      screenOptions={{
                          headerShown: false,
                      }}>
      <Stack.Screen name="CharityAccount" component={CharityAccountScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}

export default CharityAccountStack;
