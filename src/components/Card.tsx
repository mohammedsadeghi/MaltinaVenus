/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width:'100%',
    minHeight:'100px',
    borderBottom: '1px solid #ccc',
    padding:'0.5rem',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent:"space-between",
    alighItems:"center"
  },
  productImg: {
    maxWidth: "7rem",
    minWidth: "5rem",
    height:"5rem",
    margin:"auto"
  },
  title: {
    width: "100%",
    color:"#999",
    lineHeight:"14px",
    fontSize:"0.675rem",
    marginTop:"0.25rem",
    marginBottom:"0.25rem",
    fontWieght:"100",
    height:24,
  }
})


const Card= ({productData}) => {
  return (
    <View style={[styles.card]}>
      <View>
        <Image
          accessibilityLabel={productData.title}
        source={productData.image}
          resizeMode="contain"
          style={styles.productImg}
        />
      </View>
      <View style={{flex:1}}>
        <Text>star component</Text>
        <Text style={[styles.title]}>{productData.title}</Text>
        <Text>cost component</Text>
      </View>
    </View>
  );
}

export default Card;