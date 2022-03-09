import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import New from "../components/New";

import * as Icon from "react-native-feather";

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
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
          name="Casa São Paulo"
          description="Perto de tudo, completa e bem equipada com tudo que você precisa"
          price="2.500,90"
          onPress={()=>{}}
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