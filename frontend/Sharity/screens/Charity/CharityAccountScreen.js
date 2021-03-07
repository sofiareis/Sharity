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

function CharityAccountScreen({ navigation }) {
  return (
    <View>
      <Text>Charity Account</Text>
      <TouchableOpacity style={{width: 100, height: 40, backgroundColor: '#FFD7DF'}}
                        onPress={() => navigation.navigate('ChatList')}>
        <Text>Go to Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CharityAccountScreen;
