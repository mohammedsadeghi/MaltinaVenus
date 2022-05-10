/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width:'90%',
    height:'100px',
    borderBottom: '1px solid #ccc',
    padding:'0.5rem',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent:"space-between",
  },
  productImg: {
    maxWidth: "7rem",
    minWidth: "5rem",
    height:"5rem",
  }
})


const Card= () => {
  return (
    <View style={[styles.card]}>
      <View>
        <Image
          accessibilityLabel="React logo"
        source="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
          resizeMode="contain"
          style={styles.productImg}
        />
      </View>
      <View>
        <Text>star component</Text>
        <Text>desciption</Text>
        <Text>cost component</Text>
      </View>
    </View>
  );
}

export default Card;