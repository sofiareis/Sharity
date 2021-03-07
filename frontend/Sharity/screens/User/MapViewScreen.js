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
  PermissionsAndroid,
  ActivityIndicator,
  ToastAndroid,
  TouchableNativeFeedback,
  TextInput
} from 'react-native';
//import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
//import Geolocation from 'react-native-location';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Geolocation from '@react-native-community/geolocation';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import Geocoder from "react-native-geocoding";
import { debounce } from "throttle-debounce";

const height = Dimensions.get('window').height;


/*Geocoder.init("AIzaSyB17L7g_K0USqlfWzlu4STsy6Jdcy_6y-M");

export default class MapViewScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      region: {
      latitude: 0,
      longitude: 0
    },
      destination: "",
      tracksViewChanges: false,
      mounted: false,
      address:''
    };
    this.onSubmit = debounce(1000, this.onSubmitSearch);
  }
hasLocationPermission = async () => {
    if (Platform.OS === "android" && Platform.Version <= 28) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (hasPermission) return true;

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        "Location permission denied by user.",
        ToastAndroid.LONG
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        "Location permission revoked by user.",
        ToastAndroid.LONG
      );
    }
    return false;
  };
geolocation() {
    if (this.hasLocationPermission()) {
      this.watchId = Geolocation.watchPosition(
        position => {
          this.setState({
            region: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            },
            loading: true
          });
        },
        error => {
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 100000 }
      );
    }
  }
componentDidMount() {
          this.geolocation();
}
async componentWillUnmount() {
    await Geolocation.clearWatch(this.watchId);
  }
  onRegionChange(region) {
    this.setState({ region });
    setTimeout(() => {
      Geocoder.from(this.state.region.latitude, this.state.region.longitude)
        .then(json => {
          let formatted_address = json.results[0].formatted_address;
          let city_address = json.results[5].formatted_address.split(",")[0];
          this.setState({
            address: formatted_address,
            city: city_address
          });
        })
        .catch(error => console.warn(error));
    }, 150);
  }

  async onSubmitSearch(destination) {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${destination}&location=${this.state.region.latitude},${this.state.region.longitude}&radius=500&stricbounds&components=country:ng&key=${API_KEY}`;

    try {
      const result = await fetch(apiUrl);
      const json = await result.json();
      this.setState({
        predictions: json.predictions
      });
    } catch (err) {
      console.warn(err);
    }
    <View>
        {this.state.predictions.map(prediction => {
        return (
          <TouchableNativeFeedback
            key={prediction.id}
            onPress={() => this.geocoder(prediction.description)}
           >
             <View>
                <Text>
                   {prediction.description}
                </Text>
             </View>
          </TouchableNativeFeedback>
                  );
            })}
         </View>

  }
  onChangeDestination(destination) {
    this.setState({ destination }, () =>     this.onSubmit(this.state.destination));
  }

  geoCoder(address) {
    Geocoder.from(address)
      .then(json => {
        let location = json.results[0].geometry.location;
        this.setState({
          region: {
            latitude: location.lat,
            longitude: location.lng
          }
        });
      })
      .catch(error => console.warn(error));
  }

render() {

    return (
      <MapView
              loadingEnabled
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              showsPointsOfInterest
              showsMyLocationButton
              region={{
                ...this.state.region,
                latitudeDelta: 0.0123,
                longitudeDelta: 0.0023
              }}
              onRegionChangeComplete={region =>             this.onRegionChange(region)}
            >
              <MapView.Marker
                coordinate={this.state.region}
                tracksViewChanges={this.state.tracksViewChanges}
              />
              <MapView.Circle
                center={this.state.region}
                radius={27}
                strokeWidth={2.5}
                strokeColor="red"
                fillColor="#B9B9B9"
              />
           <TextInput
            placeholder="Input Service Address"
            value={this.state.destination}
            onChangeText={data => this.onChangeDestination(data)}></TextInput>

            </MapView>


)

}
}


const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1
  },
});*/






function MapViewScreen({ navigation }) {
  const [message, setMessage] = useState("");

  return (
    <View style = {{backgroundColor: '#fff', height: height}}>
      <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <View>
          <Text style = {styles.header}>Donate</Text>
          <Text style = {styles.subtitle}>to a shelter</Text>
        </View>
        <View style={styles.listIcon}>
          <Ionicons name = "ios-list-outline" color='#D38796' size={50}
                    onPress={() => navigation.navigate('UserBrowse')}/>
          <Text style = {styles.mapText}>ListView</Text>
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

      <View style={styles.mapcontainer}>
       <MapView
           provider={PROVIDER_GOOGLE}
           style={styles.maps}
           initialRegion={{
             latitude: 49.2493293,
             longitude: -123.1224315,
             latitudeDelta: 0.18,
             longitudeDelta: 0.18
           }}
           showUserLocation={true} >
           <Marker
             coordinate={{
             latitude: 49.2717299,
             longitude: -123.0693109,}}
             title="Vancouver Rape Relief and Women's Shelter"/>
           <Marker
             coordinate={{
             latitude: 49.282101,
             longitude: -123.0971959}}
             title="Downtown Eastside Womens Emergency Shelter"/>
           <Marker
             coordinate={{
             latitude: 49.2821779,
             longitude: -123.1041642}}
             title="Downtown Eastside Women's Centre"/>
           <Marker
             coordinate={{
             latitude: 49.283286,
             longitude: -123.0992306}}
             title="The Bloom Group - Powell Place"/>
           <Marker
             coordinate={{
             latitude: 49.2682067,
             longitude: -123.0715626}}
             title="My Sister's Closet"/>
           <Marker
             coordinate={{
             latitude: 49.2822269,
             longitude: -123.1043032}}
             title="Bridge Housing for Women"/>
       </MapView>
      </View>
   </View>);
}


const styles = StyleSheet.create({
  mapcontainer: {
        marginTop: -20,
        zIndex: -1,
        height: height - 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
  },
  header: {
    marginTop: 50,
    marginLeft: 30,
    fontFamily: 'Inter-Bold',
    fontSize: 30
  },
  subtitle: {
    marginLeft: 30,
    fontFamily: 'Inter-regular',
    fontSize: 30,
    marginTop: -5
  },
  maps: {
        ...StyleSheet.absoluteFillObject,
  },
  mapText: {
    color: '#D38796',
    fontFamily: 'Inter-Light'
  },
  listIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginRight: 30
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
    paddingLeft: 50,
    backgroundColor: '#fff'
  },
  searchIcon: {
    marginTop:25,
    marginLeft: 30
  },
})



export default MapViewScreen;
