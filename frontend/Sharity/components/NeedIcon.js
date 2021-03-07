import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

function NeedIcon(type) {
  const map = {
    "Blankets" : require('../icons/blankets.png'),
    "Bottoms" : require('../icons/bottoms.png'),
    "Pants" : require('../icons/bottoms.png'),
    "Hygiene Products" : require('../icons/hygiene.png'),
    "Menstrual Products": require('../icons/menstralP.png'),
    "Jackets" : require('../icons/jackets.png'),
    "PJs" : require('../icons/PJs.png'),
    "Shoes" : require('../icons/shoes.png'),
    "Tops" : require('../icons/tops.png'),
    "Shirts" : require('../icons/tops.png'),
    "Underwear" : require('../icons/underwear.png'),
    "Gift Cards" : require('../icons/empty.png'),
    "Beauty Products" : require('../icons/empty.png'),
    "Accessories" : require('../icons/empty.png')
  }
  console.log(type.type);
  var url = map[type.type];

  return (
    <Image source={url} />
  );
}

export default NeedIcon;
