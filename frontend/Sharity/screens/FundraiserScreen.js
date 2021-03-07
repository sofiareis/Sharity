import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
const { height } = Dimensions.get('window');

function FundraiserScreen({ navigation }) {
  return (
    <ScrollView >

    <View style = {{backgroundColor: '#fff', height: height}}>
      <View style = {{flexDirection: 'row'}}>
          <Text style = {styles.header}>Period Positivty</Text>
          <Image style = {styles.logo} source={require('../components/Logo.png')}  />
      </View>
      <View style = {styles.rectangle1}>
        <Text style = {styles.text}>The average menstruator will have 456 periods their lifetime. Yet, 1.25 billion people around the world do not have regular access to sanitary products. Locally, homeless menstruators are severely affected by period poverty, often facing difficult decisions between needs like food and menstrual products. Without access to resources, they are at risk of multiple health problems.</Text>
      </View>
      <View style = {styles.rectangle3}>
        <Text style = {styles.text2}>We, the developers of Sharity, are passionate about this issue and hope to eliminate the stigma around menstruation. All proceeds from this fundraiser will go towards purchasing menstrual products for Vancouver women shelters and charities.</Text>
      </View>
      <View style = {styles.bar}/>
      <View style = {styles.colorBar}/>
      <Text style = {styles.barText}>$50 raised!</Text>
      <TouchableOpacity>
          <View style = {styles.button}>
            <Text style = {styles.donate}>Donate</Text>
          </View>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    marginLeft: 30,
    fontFamily: 'Inter-Bold',
    fontSize: 30
  },
  logo: {
    marginTop: 40,
    marginLeft: 60,
    height: 60,
    width: 60
  },
  rectangle1: {
    height: 210,
    width: 380,
    borderRadius: 25,
    backgroundColor: '#FFEFF2',
    alignSelf: 'center',
    marginTop: 25
  },
  text: {
    fontFamily: 'Inter-Light',
    fontSize: 16,
    textAlign: 'left',
    padding: 15,
    marginTop: -5
  },
  rectangle3: {
    height: 150,
    width: 380,
    borderRadius: 25,
    backgroundColor: '#D38796',
    alignSelf: 'center',
    marginTop: 10
  },
  text2: {
    fontFamily: 'Inter-Light',
    fontSize: 16,
    padding: 15,
    marginTop: 0,
    color: '#fff'
  },
  bar: {
    marginTop: 50,
    height:52,
    width: 330,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    alignSelf: 'center'
  },
  colorBar: {
    marginTop: -51,
    marginLeft: 42,
    height:50,
    width: 150,
    borderRadius: 25,
    backgroundColor: '#94B2BF',
  },
  barText: {
    fontFamily: 'Inter-Light',
    fontSize: 15,
    padding: 15,
    marginTop: -52,
    marginLeft: 55,
    color: '#fff'
  },
  button: {
    marginTop: 35,
    height:47,
    width: 140,
    borderRadius: 25,
    backgroundColor: '#D38796',
    alignSelf: 'center'
  },
  donate: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
    marginTop: 8
  },
});

export default FundraiserScreen;
