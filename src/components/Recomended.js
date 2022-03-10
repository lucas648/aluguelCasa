import React from "react";
import { StyleSheet, ImageBackground, Text } from "react-native"

export default function Recomended(props){
  return (
    <ImageBackground
      source={props.cover}
      style={styles.container}
      blurRadius={5}
    >
      <Text style={[styles.house, styles.shadow]}>
        {props.houseName}
      </Text>
      <Text style={[styles.description, styles.shadow]}>
        {props.offer}
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container:{
    height: 130,
    width: 230,
    marginRight: 20,
    marginBottom: 40,
    opacity: 0.8,
    backgroundColor: '#000',
    marginLeft: 3,
    padding: 12,
    marginTop: 20
  },
  house:{
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 15,
  },
  description:{
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 12
  },
  shadow:{
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 3,
    textShadowColor: '#000'
  }
});