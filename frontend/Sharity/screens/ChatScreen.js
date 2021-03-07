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

import firebase from 'firebase/app';
import 'firebase/firestore';

import Backend from 'ChatScreenBackend'

import {GiftedChat} from 'react-native-gifted-chat';
import { useAuthState } from 'react-firebase-hooks/firestore';

export default class ChatScreen extends React.Component {
  state = {
    messages: []
  };

  //called before rendering
  componentWillMount() {

  }
  render() {
    return (
      <GiftedChat
        messages = {this.state.messages}
        onSend = {(message) => {
          //send message to your backend
          Backend.sendMessage(message);
        }}
        user = { {
          _id: Backend.getUid(),
          name: this.props.name,
        }}
       /> 
    );
  }
 
  //called after rendering
  componentDidMount() {
    Backend.loadMessages((message => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    }));
  }
    
  //when we close the chat
  componentWillUnmount() {
    Backend.closeChat();
  }
}

ChatScreen.defaultProps = {
  name: 'Johanna',
};

ChatScreen.propTypes = {
  name: React.propTypes.string,
};

export default ChatScreen;
