/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width:'100%',
    height:'100px',
    borderBottom: '1px solid #eaeaea',
    padding:'0.5rem',
    paddingRight:"1rem",
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent:"space-between",
    alighItems:"center"
  },
  productImg: {
    maxWidth: "6rem",
    minWidth: "4rem",
    height:"4rem",
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
  }
})


const Card= ({cardInfo}) => {
  return (
    <View style={[styles.card]}>
      <View>
        <Image
          accessibilityLabel={cardInfo.title}
        source={cardInfo.image}
          resizeMode="contain"
          style={styles.productImg}
        />
      </View>
      <View style={{flex:1}}>
        <Text>star component</Text>
        <Text 
          numberOfLines={2} 
          style={[styles.title]}
          >
          {cardInfo.title}
          </Text>
        <Text>price component</Text>
      </View>
    </View>
  );
}

export default Card;