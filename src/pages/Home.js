import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";

import New from "../components/New";
import House from "../components/House"
import Recomended from "../components/Recomended"

export default function Home(){

  const navigation = useNavigation();

  return(
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor:'#fff'}}
    >
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Icon.Search stroke={'black'}/>
          <TextInput 
            placeholder="O que Procura??"
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.contentView}>
        <Text style={styles.title}>Novidades</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
        <New
          cover={require('../assets/house1.jpg')}
          name="Casa de Praia"
          description="Linbda casa, novíssima e perto do mar em bairro 100% seguro"
          price="1.240,90"
          onPress={()=>{navigation.navigate('detail')}}
        />
        <New
          cover={require('../assets/house2.jpg')}
          name="Casa Flórida"
          description="Linbda casa, novíssima e perto de tudo que voê precisa"
          price="1.540,90"
          onPress={()=>{}}
        />
        <New
          cover={require('../assets/house3.jpg')}
          name="Casa Alphavile"
          description="Perto de tudo, completa e bem equipada com tudo que você precisa"
          price="2.500,90"
          onPress={()=>{}}
        />
      </ScrollView>

      <View style={
        {
          flexDirection: 'row', 
          marginBottom: 10, 
          alignItems: 'center'
        }
      }>
        <Text style={
          [
            styles.title, 
            { 
              marginTop: 20
            }
          ]
        }>
          Próximo de Você!!
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
        <House 
          cover={require('../assets/house4.jpg')}
          description={'Esta casa novinha em Ubatuba está esperando por você agora mesmo'}
          price={'1.456,35'}
        />
        <House 
          cover={require('../assets/house5.jpg')}
          description={'Uma casa única em região nobre do Rio de Janeiro, bem espaçosa e confortável'}
          price={'1.207,00'}
        />
        <House 
          cover={require('../assets/house6.jpg')}
          description={'Casa única em Recife, próximo a pontos históricos e da melhor praia da cidade'}
          price={'956,88'}
        />
      </ScrollView>

      <Text style={[
        styles.title, 
        { 
          marginTop: 20
          }
      ]}>
        Dica do Dia
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
        <Recomended
          cover={require('../assets/house4.jpg')}
          houseName={'Casa alto padrão'}
          offer={'30% off'}
        />
        <Recomended
          cover={require('../assets/house6.jpg')}
          houseName={'Apartamento Jardins'}
          offer={'25% off'}
        />
        <Recomended
          cover={require('../assets/house2.jpg')}
          houseName={'Casa de campo'}
          offer={'65% off'}
        />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    width:'100%',
    marginVertical: 20,
  },
  inputArea:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems:'center',
    width: '98%',
    backgroundColor: '#fff',
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10
  },
  input:{
    fontFamily: 'Montserrat',
    paddingHorizontal: 10,
    fontSize: 13,
    width: '90%'
  },
  contentView:{
    flexDirection: 'row',
    width: '100%',
    alignItems:'center'
  },
  title:{
    paddingHorizontal: 15,
    fontFamily: 'Montserrat_Bold',
    fontSize: 18,
    color: '#4f4a4a'
  },
});