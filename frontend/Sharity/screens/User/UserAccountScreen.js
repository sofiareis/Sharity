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

function UserAccountScreen({ navigation }) {
  return (
    <View>
      <Text>User Account</Text>
      <TouchableOpacity>
        <Text>Donate</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UserAccountScreen;
