import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { height } = Dimensions.get('window');

var Charities = [ 'Downtown Eastside Womens Emergency Shelter', '302 Columbia St. Vancouver, BC',
                  'Mis’cel’any Women Helping Women', '323 East Broadway, Vancouver, BC',
                  'My Sister’s Closet (East Vancouver)', '1830 Commercial Drive Vancouver, BC ',
                  'My Sister’s Closet (Downtown)', '1092 Seymour Street Vancouver, BC'
] ;

function UserBrowseScreen({ navigation }) {
  return (
    <View style = {{backgroundColor: '#fff', height: height}}>
      <View style = {{flexDirection: 'row'}}> 
        <View> 
          <Text style = {styles.header}>Donate</Text>
          <Text style = {styles.subtitle}>to a shelter</Text>
        </View>
        <View> 
          <TouchableOpacity  onPress={() => navigation.navigate('MapView')}>
            <Ionicons name = "ios-compass-outline" color='#D38796' size={50} style = {styles.map}/>
            <Text style = {styles.mapText}>map</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style = {{flexDirection: 'row'}}>
        <MaterialCommunityIcons name="magnify" color='#979696' size={30} style={styles.searchIcon}/> 
        <TextInput
            style={styles.input} 
            placeholder = 'search for shelters...'
          // onChangeText = {(val)=> setMessage(val) }
          >
        </TextInput>
      </View>

      <ScrollView style={{marginTop: 10}}>
        <View style={{paddingBottom: 120, paddingTop: 10}}>
          <View style={styles.rectangle}>
            <TouchableOpacity  onPress={() => navigation.navigate('Shelter1')}>
              <Text style = {styles.charityName}>{Charities[0]}</Text>
              <Text style = {styles.charityInfo}>{Charities[1]}</Text>
              <Text style = {styles.charityInfo}>NEEDS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rectangle}>
            <TouchableOpacity  onPress={() => navigation.navigate('MapView')}>
              <Text style={styles.charityName}>{Charities[2]}</Text>
              <Text style = {styles.charityInfo}>{Charities[3]}</Text>
              <Text style = {styles.charityInfo}>NEEDS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rectangle}>
            <TouchableOpacity  onPress={() => navigation.navigate('MapView')}>
              <Text style={styles.charityName}>{Charities[4]}</Text>
              <Text style = {styles.charityInfo}>{Charities[5]}</Text>
              <Text style = {styles.charityInfo}>NEEDS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rectangle}>
            <TouchableOpacity  onPress={() => navigation.navigate('MapView')}>
              <Text style={styles.charityName}>{Charities[6]}</Text>
              <Text style = {styles.charityInfo}>{Charities[7]}</Text>
              <Text style = {styles.charityInfo}>NEEDS</Text>
            </TouchableOpacity>
          </View>
          

        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50, 
    marginLeft: 30, 
    fontFamily: 'Inter-Bold', 
    fontSize: 30
  },
  subtitle: { 
    marginLeft: 30, 
    fontFamily: 'Inter-regular', 
    fontSize: 30
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#979696',
    width: 360,
    height: 42,
    marginTop: 20,
    marginLeft: -40,
    fontSize: 15,
    fontFamily: 'Inter-Light',
    paddingLeft: 50
  },
  searchIcon: {
    marginTop:25,
    marginLeft: 30
  },
  map: {
    marginTop:65,
    marginLeft: 150
  },
  mapText: {
    marginTop: -7,
    marginLeft: 159,
    color: '#D38796',
    fontFamily: 'Inter-Light'
  },
  rectangle: {
    height: 122,
    width: 328,
    borderRadius: 25,
    backgroundColor: '#FFEFF2',
    alignSelf: 'center',
    marginTop: 20
  },
  charityName:{
    marginLeft: 20,
    marginTop: 10,
    fontFamily: 'Inter-Bold',
    fontSize: 15,
  },
  charityInfo:{
    marginLeft: 20,
    fontFamily: 'Inter-Medium',
    fontSize: 12,
  }
});
export default UserBrowseScreen;
