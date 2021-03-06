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
      <TouchableOpacity style={{width: 100, height: 40, backgroundColor: '#FFD7DF'}}
                        onPress={() => navigation.navigate('Chat')}>
        <Text>Go to Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UserAccountScreen;
