import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import UserAccountScreen from '../screens/User/UserAccountScreen.js';
import ChatScreen from '../screens/ChatScreen.js';

const Stack = createStackNavigator();

function UserAccountStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="UserAccount"
                      screenOptions={{
                          headerShown: false,
                      }}>
      <Stack.Screen name="UserAccount" component={UserAccountScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}

export default UserAccountStack;
