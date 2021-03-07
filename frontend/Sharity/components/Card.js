import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ImageSourcePropType } from 'react-native'

const Card = ({ card }) => (
  <View
    activeOpacity={1}
    style={styles.card}
  >
    <Text style={styles.text}>
      {card.title}
    </Text>
    <Image
      style={styles.image}
      source={card.photo}
    />
  </View>
);

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    /* Setting the height according to the screen height, it also could be fixed value or based on percentage. In this example, this worked well on Android and iOS. */
    height: height - 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
  },
  image: {
    borderRadius: 5,
    flex: 1,
    height: 50,
    width: 300,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFFFFF',
    textShadowColor: '#000000',
    textShadowRadius: 10,
    marginBottom: 10
  },
});

export default Card;
