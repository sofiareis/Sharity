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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserAccountScreen from '../screens/User/UserAccountScreen.js';
import UserBrowseStack from './UserBrowseStack.js';
import FundraiserScreen from '../screens/FundraiserScreen.js';


const Tab = createBottomTabNavigator();

function UserStack({ navigation }) {
  return (
    <Tab.Navigator intialRouteName = 'UserBrowse'
                    tabBarOptions={{
                      activeTintColor:"#D38796",
                      inactiveTintColor: "#979696",
                      style: {
                        backgroundColor: '#FFFFFF',
                        height: 72,
                        paddingTop: 10
                      }
                    }}>
      <Tab.Screen name='Fundraiser'
                  component={FundraiserScreen}
                  options = {{
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                     ),
                   }}
                  />
      <Tab.Screen name='UserBrowse'
                  component={UserBrowseStack}
                  options = {{
                    tabBarIcon: ({ color }) => (
                    <Ionicons name="home-outline" color={color} size={26} />
                     ),
                   }}
                  />
      <Tab.Screen name='UserAccount'
                  component={UserAccountScreen}
                  options = {{
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="piggy-bank" color={color} size={26} />
                     ),
                   }}
                  />
    </Tab.Navigator>
  );
}

export default UserStack;
