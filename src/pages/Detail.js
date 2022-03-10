import React from "react";
import { View, Text, Image, ScrollView, StyleSheet} from "react-native";
import Stars from 'react-native-stars';
import Icon from "react-native-ionicons";

import Swipper from "../components/Swipper";

export default function Detail(){
  return(
    <View style={styles.container}>
      <View style={styles.swipperContent}>
        <Swipper/>
      </View>
      <View style={styles.headerContent}>
        <View style={{ width: '65%'}}>
          <Text style={styles.house}>Casa de Praia</Text>
        </View>
        <View style={{ width: '35%'}}>
          <Text style={styles.rating}>Avaliações</Text>
          <View style={{alignItems:'center', flexDirection: 'row'}}>
            <Stars
              default={4}
              count={5}
              half={true}
              starSize={20}
              fullStar={
                <Icon name="star" size={24} style={styles.star}/>
              }
              emptyStar={
                <Icon name="star-outline" size={24} style={styles.star} />
              }
              halfStar={
                <Icon name="star-half" size={24} style={styles.star} />
              }
              update={(valor)=>{}}
            />
          </View>
        </View>
      </View>
      <Text style={styles.price}>R$ 2.450,90</Text>
      <Text style={styles.description}>
        Casa dos seus sonhos próximo de tudo o que você precisa e muito bem equipada!!
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15, marginTop: 20}}>
        <View style={styles.slide}>
          <Image
            source={require('../assets/house5.jpg')}
            style={{width: 90, height: 90, borderRadius: 8}}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/house3.jpg')}
            style={{width: 90, height: 90, borderRadius: 8,}}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../assets/house6.jpg')}
            style={{width: 90, height: 90, borderRadius: 8,}}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
  swipperContent:{
    flexDirection: 'row',
    height: 340,
    width: '100%',
  },
  headerContent:{
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  house:{
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4f4a4a'
  },
  rating:{
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 9,
    color: '#4f4a4a'
  },
  star:{
    color: '#e7a74e',
    backgroundColor: 'transparent',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1
  },
  price:{
    paddingHorizontal: 20,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000'
  },
  description:{
    fontFamily: 'Montserrat',
    paddingHorizontal: 20,
    color: '#b3aeae',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 20,
  },
  slide:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 90,
    width: 90,
    borderRadius: 8,
    marginRight: 20
  },
});