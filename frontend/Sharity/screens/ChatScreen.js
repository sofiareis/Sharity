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

function ChatScreen({ navigation, route }) {
  const { id } = route.params;
  return (
    <View>
      <Text>Hello Chat Screen</Text>
    </View>
  );
}

export default ChatScreen;
