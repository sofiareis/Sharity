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

  function getRequest() {
    fetch('http://10.0.2.2:3000', {
      method: 'GET'
    })
      .then(msg => msg.json())
      .then(msg => console.log(msg))
      .catch(err => console.log(err));
  }

  return (
    <View>
      <Text>Hello Chat Screen</Text>
        <TouchableOpacity style={{width: 100, height: 40, backgroundColor: '#FFD7DF'}}
                          onPress={() => getRequest()}>
          <Text>Test Endpoint</Text>
        </TouchableOpacity>
    </View>
  );
}

export default ChatScreen;
