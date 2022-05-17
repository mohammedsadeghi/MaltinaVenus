/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

type cardInfoProps = {
  [key: string]: any;
};

const Card: React.FC<cardInfoProps> = ({cardInfo}) => {
  return (
    <View>
      <View style={{flex: 2}}>
        <View
          style={
            cardInfo.price.deal === null ? [styles.hidden] : [styles.discount]
          }>
          <Text style={[styles.discountText]}> تخفیف </Text>
          {cardInfo.price.deal !== null
            ? (parseFloat(cardInfo.price.main) - parseFloat(cardInfo.price.deal)).toFixed(2)
            : 0}
          $
        </View>
        <Text numberOfLines={2} style={[styles.price]}>
          ${cardInfo.price.main}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  price: {
    paddingVertical: 8,
    color: 'black',
    fontSize: 18,
    position: 'relative',
    top: 15,
    fontWeight: "700"
  },
  discount: {
    paddingVertical: 1,
    color: 'red',
    fontSize: 12,
    textAlign: 'left',
    position: 'relative',
    top: 23,
    right: 0,
  },
  discountText: {
    color: 'gray',
  },
  hidden: {
    display: 'none',
  },
});

export default Card;
