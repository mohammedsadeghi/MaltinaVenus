import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Star from 'react-native-star-view';

type StarProps = {
  score: number;
  reviewCount: string;
};

const StarScore: FC<StarProps> = ({score, reviewCount}) => {
  const styles = StyleSheet.create({
    starStyle: {
      width: 100,
      height: 20,
    },
    starContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    review: {
      marginLeft: 4,
    },
  });
  return (
    <View style={styles.starContainer}>
      <Star score={score} style={styles.starStyle} />;
      <Text style={styles.review}>{reviewCount}</Text>
    </View>
  );
};

export default StarScore;
