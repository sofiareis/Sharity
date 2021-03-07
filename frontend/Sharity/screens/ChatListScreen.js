import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const { height } = Dimensions.get('window');
function ChatListScreen({ navigation }) {
  const data = [
    {
      name: "User #1",
      uid: '111',
      key: '1'
    },
    {
      name: "User #2",
      uid: '222',
      key: '2'
    },
    {
      name: "User #3",
      uid: '333',
      key: '3'
    },
    {
      name: "User #4",
      uid: '444',
      key: '4'
    },
    {
      name: "User #5",
      uid: '555',
      key: '5'
    }
  ];

  return (
    <View style={{backgroundColor: '#fff', height: height}}>
      <AntDesign name="arrowleft" color='#000' size={30}
                 style={{marginLeft: 20, marginTop: 30}}
                 onPress={() => navigation.goBack()}/>
      <Text style={styles.titleBold}>Messages</Text>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity style={{marginTop: 15}}
                              onPress={() => navigation.navigate('Chat', {id: item.uid})}>
              <View style={styles.line} />
              <Text style={styles.userText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.key}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBold: {
    fontFamily: 'Inter-SemiBold',
    marginLeft: 20,
    marginTop: 10,
    fontSize: 30
  },
  line: {
    width: 350,
    height: 1,
    backgroundColor: '#C4C4C4'
  },
  userText: {
    fontFamily: 'Inter-Medium',
    fontSize: 20,
    color: '#000',
    marginTop: 15
  }
});

export default ChatListScreen;
