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
  Modal
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


function Shelter1Screen({ navigation }) {
  const { height } = Dimensions.get('window');
  const [state, setState] = useState(false) ;

  return (
    <ScrollView style={{marginTop: 10}}>
      <View style = {{backgroundColor: '#fff', height: height}}>
        
        <TouchableOpacity onPress={() => navigation.goBack()}> 
          <Ionicons name="arrow-back-outline" color='#000' size={30} style={{marginTop:50, marginLeft:20}}/> 
        </TouchableOpacity>

        <Text style = {styles.name}>Downtown Eastside Womens Emergency Shelter</Text>
        <Text style = {styles.addr}>302 Columbia St. Vancouver, BC</Text>
        <Text style = {styles.phone}>Phone: 604.681.8480</Text>
        <Text style = {styles.infoTitle}>Donation Drop-off Times</Text>
        <Text style = {styles.text}>    Thursday to Tuesday: 10:00 am – 12:00 pm</Text>
        <Text style = {styles.text}>                                         2:00 – 4:00 pm</Text>
        <Text style = {styles.text}>                   Wednesday: 11:00 am – 12:00 pm</Text>
        <Text style = {styles.text}>                                         2:00 – 4:00 pm</Text>
        <Text style = {styles.donationTitle}>Donation Wishlist:</Text>
       
       <View style = {{flexDirection: 'row', alignSelf: 'center'}}> 
            <Image style = {styles.icons} source={require('../../icons/tops.png')} />  
            <Image style = {styles.icons} source={require('../../icons/jackets.png')} />
            <Image style = {styles.icons} source={require('../../icons/bottoms.png')} />
        </View>
        <View style = {{flexDirection: 'row', alignSelf: 'center'}}> 
            <Image style = {styles.icons} source={require('../../icons/PJs.png')} />
            <Image style = {styles.icons} source={require('../../icons/hygiene.png')} />
            <Image style = {styles.icons} source={require('../../icons/menstralP.png')} />
        </View>
    
        <TouchableOpacity onPress={() => setState(!state)}>    
          <View style = {styles.button}> 
            <Text style = {styles.donate}>Donate</Text>
          </View>
        </TouchableOpacity>

        <Modal transparent = {true} visible = {state} animationType='slide' onRequestClose={() => { setState(!state);}}>
          <View style = {{backgroundColor: '#979696aa', flex:1}}> 
            <View style = {styles.modalView} >
              <Text style = {styles.name}>Your Items</Text>
              <TouchableOpacity style={styles.cancel} onPress={() => setState(!state)}>
                <Text style = {{color: '#739AAB', fontFamily: 'Inter-Regular',fontSize: 25,}}>Cancel</Text>
              </TouchableOpacity>
              <ScrollView style={{marginTop: 10, marginBottom: 200}}>
                <View style = {{flexDirection: 'row', alignSelf: 'center'}}> 
                  <Image style = {styles.icons} source={require('../../icons/shirt1.png')}/>  
                  <Image style = {styles.icons} source={require('../../icons/shirt2.png')}/> 
                  <Image style = {styles.icons} source={require('../../icons/empty.png')}/> 
                </View>
                <View style = {{flexDirection: 'row', alignSelf: 'center'}}> 
                  <Image style = {styles.icons} source={require('../../icons/empty.png')}/>  
                  <Image style = {styles.icons} source={require('../../icons/empty.png')}/> 
                  <Image style = {styles.icons} source={require('../../icons/empty.png')}/> 
                </View>
                <View style = {{flexDirection: 'row', alignSelf: 'center'}}> 
                  <Image style = {styles.icons} source={require('../../icons/empty.png')}/>  
                  <Image style = {styles.icons} source={require('../../icons/empty.png')}/> 
                  <Image style = {styles.icons} source={require('../../icons/empty.png')}/> 
                </View>
              </ScrollView>
              <View FlexDirection='column'>
                <TouchableOpacity>    
                  <View style = {styles.button1}> 
                    <Text style = {styles.donate1}>Donate Selected Items</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>    
                  <View style = {styles.button2}> 
                    <Text style = {styles.donate2}>+ Add New Item</Text>
                  </View>
                </TouchableOpacity>
              </View>
              </View>
          </View>
        </Modal>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  name: {
    marginTop: 20, 
    marginLeft: 35, 
    fontFamily: 'Inter-SemiBold', 
    fontSize: 25
  },
  addr: { 
    marginTop: 5,
    marginLeft: 35, 
    fontFamily: 'Inter-Regular', 
    fontSize: 15
  },
  phone: { 
    marginLeft: 35, 
    fontFamily: 'Inter-Regular', 
    fontSize: 15
  },
  infoTitle: { 
    marginTop: 15,
    marginLeft: 35, 
    fontFamily: 'Inter-Light', 
    fontSize: 15,
    marginBottom: 5,
    textDecorationLine: 'underline',
  },
  text: { 
    marginLeft: 35, 
    fontFamily: 'Inter-Light', 
    fontSize: 15,
    marginTop: -3
  },
  donationTitle:{ 
    marginTop: 20, 
    marginLeft: 35, 
    fontFamily: 'Inter-Medium', 
    fontSize: 25
  },
  icons:{
    marginTop: 15,
    marginHorizontal: 10,
  },
  button: {
    marginTop: 25,
    height:47,
    width: 200,
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
  modalView:{
    backgroundColor: '#F2F2F2',
    height: 528,
    width: 415,
    marginTop: 245,
  },
  cancel: {
    marginLeft: 310,
    marginTop: -40
  },
  button1: {
    height:47,
    width: 264,
    borderRadius: 25,
    backgroundColor: '#D38796',
    alignSelf: 'center',
    marginTop: -160
  },
  donate1: {
    fontFamily: 'Inter-Light',
    fontSize:20, 
    color: '#fff',
    alignSelf: 'center',
    marginTop: 8
  },
  button2: {
    height:47,
    width: 264,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#D38796',
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: -100
  },
  donate2: {
    fontFamily: 'Inter-Light',
    fontSize:20, 
    color: '#D38796',
    alignSelf: 'center',
    marginTop: 8
  }

});

export default Shelter1Screen;