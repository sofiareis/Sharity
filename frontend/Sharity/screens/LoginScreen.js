import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput
} from 'react-native';

function LoginScreen({ navigation }) {
  const { height } = Dimensions.get('window');
  const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
  return (
    <View style = {{backgroundColor: '#D38796', height: height}}>
      <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
            <Image style = {styles.icons} source={require('../components/Logo.png')} />
      </View>
      <Text style={styles.name}>Sharity</Text>

  <View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="email"
    placeholderTextColor="white"
    onChangeText={(email) => setEmail(email)}
  />
</View>

<View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="password"
    placeholderTextColor="white"
    secureTextEntry={true}
    onChangeText={(password) => setPassword(password)}
  />
</View>
<TouchableOpacity style={styles.loginBtn}  onPress={() => navigation.navigate('CharityStack')} >
  <Text style={styles.loginText}>SIGN IN AS CHARITY</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.loginBtn2} onPress={() => navigation.navigate('UserStack')}>
  <Text style={styles.loginText}>SIGN IN AS USER</Text>
</TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  icons:{
    marginTop: 50,
    marginHorizontal: 10,
  },
  name: {
    marginTop: 20,
    marginHorizontal: 10,
    alignSelf: 'center',
    fontFamily: 'Inter-SemiBold',
    fontSize: 40,
    marginBottom: 50,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 10,
    alignItems: "center",
    alignSelf: 'center',
    alignContent: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    alignSelf: 'center',
    alignItems: "center",
    alignContent: 'center',
    color: 'white',
    fontSize: 15,

  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn:{
   height:45,
   alignItems:"center",
   justifyContent:"center",
   marginTop:15,
   backgroundColor:"#223a45",
   width: "70%",
   borderRadius:30,
   alignSelf: 'center',
   marginBottom: 10,

 },
 loginBtn2:{
  height:45,
  alignItems:"center",
  justifyContent:"center",
  marginTop:5,
  backgroundColor:"#223a45",
  width: "70%",
  borderRadius:30,
  alignSelf: 'center',
  marginBottom: 20,

},
});

export default LoginScreen;
