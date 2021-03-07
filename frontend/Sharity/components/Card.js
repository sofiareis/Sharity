import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ImageSourcePropType } from 'react-native'

const Card = ({ card }) => (
  <View
    activeOpacity={1}
    style={styles.card}
  >
    <Text style={styles.headerText}>Incoming Donation: </Text>
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
    height: height - 275,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 10,
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
    height: 200,
    width: 200,
    marginTop: 50
  },
  headerText: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontFamily: 'Inter-Regulat',
    fontSize: 22,
    marginLeft: 10,
    color: '#223A45',
    marginTop: 30
  },
  text: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontFamily: 'Inter-SemiBold',
    fontSize: 28,
    marginLeft: 10,
    color: '#223A45',
  },
});

export default Card;
