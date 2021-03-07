import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  PermissionsAndroid,
  Image,
  FlatList
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';

const { height } = Dimensions.get('window');
function UserAccountScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [picture, setPicture] = useState({
    filePath: "",
    fileData: "",
    fileUri: ""
  });

  const[array_pic, setArray_pic] = useState([]);

  const [imageSource, setImageSource] = useState("");

  let options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

  var launchCamera = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,{
        title: 'We need your permission'
      });

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');

        ImagePicker.launchCamera(options, (response) => {
          console.log('Response = ', response);

          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            const source = { uri: response.uri };
            console.log('response', JSON.stringify(response));
            setArray_pic([response.uri, ...array_pic]);
            setPicture({
              filePath: response,
              fileData: response.data,
              fileUri: response.uri
            });
            setModalVisible(!modalVisible);
          }
        });
      } else {
        console.log('Camera permission denied');
      }

  }

  var launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        setArray_pic([response.uri, ...array_pic]);
        setPicture({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
        setModalVisible(!modalVisible);
      }
    });

  }
  
  
  return (
    <View style={{backgroundColor: '#fff', height: height}}>
      <View style={styles.rowContent}>
        <View>
          <Text style={styles.titleNormal}>My</Text>
          <Text style={styles.titleBold}>Donation Items</Text>
        </View>
        <Ionicons name="chatbubble-ellipses-outline" color='#D38796' size={40}
                  style={{marginLeft: 60}} onPress={() => navigation.navigate('ChatList')}/>
      </View>
      <View style={{height: 30}} />
      <View style={styles.content}>
        <TouchableOpacity style={styles.donateButton}
                          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.btnText}>+ Add Item</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={launchCamera}>
              <Text style={styles.modalOption}>Open Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={launchImageLibrary}>
              <Text style={styles.modalOption}>Choose From Camera Roll</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.modalCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View>
        <FlatList
          data={array_pic}
          numColumns={3}
          renderItem={({item}) => (
            <Image
              style={{
                width: '33%',
                height: 150,
              }}
              source={{uri: item}}
            />
          )}
        />
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleNormal: {
    marginTop: 30,
    marginLeft: 20,
    fontFamily: 'Inter-Regular',
    fontSize: 30
  },
  titleBold: {
    fontFamily: 'Inter-SemiBold',
    marginLeft: 20,
    fontSize: 30
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  donateButton: {
    height: 45,
    width: 180,
    borderRadius: 25,
    backgroundColor: '#D38796',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    fontSize: 16
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height: 150,
    width: 300,
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalOption: {
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    color: '#739AAB',
    marginBottom: 10
  },
  modalCancel: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#223A45',
    marginTop: 20
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  images: {
    width: 75,
    height: 75,   
    marginHorizontal: 3
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center'
  },
});

export default UserAccountScreen;
