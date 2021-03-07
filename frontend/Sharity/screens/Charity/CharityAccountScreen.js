import React, { useState, useEffect } from 'react';
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
import { useIsFocused } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NeedIcon from '../../components/NeedIcon.js';

const { height } = Dimensions.get('window');
function CharityAccountScreen({ navigation }) {
  const isFocused = useIsFocused();
  const [needs, setNeeds] = useState([]);
  const allNeeds = ["Blankets", "Pants", "Hygiene Products", "Jackets", "Menstrual Products",
                    "PJs", "Shoes", "Tops"];

  useEffect(() => {
    fetchNeeds();
  }, [isFocused]);

  function fetchNeeds() {
    fetch('http://10.0.2.2:3000/needs', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
      setNeeds(() => {
        return res.map(item => item.type);
      });
    });
  }

  return (
    <View style={{backgroundColor: '#fff', height: height, padding: 30}}>
      <View style={styles.rowContent}>
        <View>
          <Text style={styles.titleBold}>Manage</Text>
          <Text style={styles.titleBold}>Account</Text>
        </View>
        <Ionicons name="chatbubble-ellipses-outline" color='#D38796' size={40}
                  style={{marginLeft: 160}} onPress={() => navigation.navigate('ChatList')}/>
      </View>
      <View style={{height: 30}} />
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.subtitleBold}>Name:  </Text>
        <Text style={styles.titleNormal}>Downtown Eastside Women's Emergency Shelter</Text>
      </View>
      <View style={{height: 10}} />
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.subtitleBold}>Address:  </Text>
        <View style={{flexDirection: 'column'}}>
        <Text style={styles.titleNormal}>302 Columbia St.</Text>
        <Text style={styles.titleNormal}>Vancouver, BC V3L 1A7</Text>
        </View>
      </View>
      <View style={{height: 35}} />
      <Text style={styles.donationTitle}>Donation Wishlist:</Text>
      <FlatList
        data={needs}
        numColumns={3}
        renderItem={({ item }) => (
            <View style={styles.donation}>
              <NeedIcon category={item} selected={true} />
            </View>
        )}
        keyExtractor={item => item.type}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rowContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10
  },
  titleBold: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 30,
    marginTop: -5
  },
  subtitleBold: {
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    color: '#D38796'
  },
  titleNormal: {
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    color: '#223A45'
  },
  donationTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 25,
    color: '#000'
  },
  donation: {
    marginTop: 10,
    marginRight: 10
  }
});

export default CharityAccountScreen;
