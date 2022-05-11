/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {StarScore} from './StarScore';
import Price from "./Price";

type cardInfoProps = {
  [key: string]: any;
};

const Card: React.FC<cardInfoProps> = ({cardInfo}) => {
  return (
    <View style={[styles.card]}>
      <View style={styles.imageContainer}>
        <Image
          accessibilityLabel={cardInfo.title}
          source={{
            uri: cardInfo.image,
          }}
          style={styles.productImg}
          resizeMode="contain"
        />
      </View>
      <View style={{flex: 2}}>
        {/* <StarScore score={Number(cardInfo.review.stars)} /> */}
        <Text numberOfLines={2} style={[styles.title]}>
          {cardInfo.title}
        </Text>
        <Text>
          <Price cardInfo={cardInfo} />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 120,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#eaeaea',
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    paddingVertical: 8,
  },
  productImg: {
    flex: 2,
    width: 150,
    height: 150,
  },
  title: {
    textAlign: 'right',
    width: '100%',
    color: '#999',
    lineHeight: 14,
    marginTop: 3,
    marginBottom: 3,
  },
});

export default Card;
