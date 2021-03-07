import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Card from '../../components/Card.js';
import OverlayLabel from '../../components/OverlayLabel.js';

function CharityBrowseScreen({ navigation }) {
  const useSwiper = useRef(null).current;
  const handleOnSwipedLeft = () => useSwiper.swipeLeft();
  const handleOnSwipedTop = () => useSwiper.swipeTop();
  const handleOnSwipedRight = () => useSwiper.swipeRight();

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  const donations = [
    {
      title: "Winter Jacket",
      photo: require('../../components/images/winter-coat.png'),
      key: 'caseex6qfO4TPMYyhorner'
    },
    {
      title: "Scarf",
      photo: require('../../components/images/scarf.png'),
      key: 'ozda-XbeP0k'
    },
    {
      title: "Hoodie",
      photo: require('../../components/images/hoodie.png'),
      key: 'nBywXevf_jE-'
    },
    {
      title: "Tampons",
      photo: require('../../components/images/tampons.png'),
      key: 'ZHy0efLnzVc'
    },
    {
      title: "Unopened Makeup",
      photo: require('../../components/images/makeup.png'),
      key: 'TvPCUHten1o'
    },
    {
      title: "Jeans",
      photo: require('../../components/images/jeans.png'),
      key: 'dlbiYGwEe9U'
    },
    {
      title: "Pads",
      photo: require('../../components/images/pads.png'),
      key: '3ujVzg9i2EI'
    },
    {
      title: "Winter Boots",
      photo: require('../../components/images/boots.png'),
      key: 'Ml4tr2WO7JE'
    },
    {
      title: "Blanket",
      photo: require('../../components/images/blanket.png'),
      key: 'mFcc5b_t74Q'
    },
    {
      title: "Gift cards",
      photo: require('../../components/images/giftcard.png'),
      key: 'Ty4f_NOFO60'
    },
  ];

  return (
      <Swiper
        ref={useSwiper}
        animateCardOpacity
        cards={donations}
        renderCard={card => <Card card={card} />}
        cardIndex={0}
        backgroundColor="white"
        stackSize={2}
        showSecondCard
        disableTopSwipe
        disableBottomSwipe
        animateOverlayLabelsOpacity
        overlayLabels={{
          left: {
            title: 'DECLINE',
            element: <OverlayLabel label="DECLINE" color="#E5566D" />,
            style: {
              wrapper: styles.overlayWrapper,
            },
          },
          right: {
            title: 'ACCEPT',
            element: <OverlayLabel label="ACCEPT" color="#4CCC93" />,
            style: {
              wrapper: {
                ...styles.overlayWrapper,
                alignItems: 'flex-start',
                marginLeft: 30,
              },
            },
          },
        }}
      />
  );
}

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  swiperContainer: {
    height: height - 250,
  },
  overlayWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginLeft: -30,
  },
});

export default CharityBrowseScreen;
