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

function LoginScreen({ navigation }) {
  return (
    <View>
      <Text style={{marginTop: 100}}>Hello Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate('UserStack')}>
        <Text>Login User</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CharityStack')}>
        <Text>Login Charity</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;
