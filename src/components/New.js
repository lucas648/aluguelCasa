import React from "react";
import { TouchableOpacity, View, StyleSheet, Image, Text } from "react-native";
import * as Icon from "react-native-feather";

export default function New(props){
  return(
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Image
        source={props.cover}
        style={styles.cover}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{props.name}</Text>

        <View style={styles.dot}>
        </View>

        <Text style={styles.badge}>Novo</Text>
      </View>
      <Text style={styles.description}>
        {props.description}
      </Text>
      <View style={styles.footer}>
        <View style={{width: '80%'}}>
          <Text style={styles.price}>R$ {props.price}</Text>
        </View>
        <View style={{width: '10%'}}>
          <Icon.ArrowDownCircle stroke="white" fill={'black'}/>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 20,
    backgroundColor: '#fff',
    height: 250,
    width: 200,
    elevation: 2,
    borderRadius: 10,
    padding: 15,
    marginRight: 30,
    marginLeft: 2,
    marginBottom: 5,
  },
  cover:{
    width: 170,
    height: 110,
    borderRadius: 10,
  },
  content:{
   flexDirection: 'row',
   alignItems: 'center',
   marginVertical: 10,   
  },
  title:{
    fontFamily: 'Montsserat_Bold',
    fontSize: 12,
    color: '#4f4a4a',
    fontWeight: 'bold'
  },
  dot:{
    width: 4,
    height: 4,
    backgroundColor: 'red',
    marginHorizontal: 4,
    borderRadius: 4,
  },
  badge:{
    color: 'red',
    fontSize: 9,
    fontFamily: 'Montsserat',
    fontWeight: 'bold'

  },
  description:{
    fontFamily: 'Montsserat',
    fontSize: 9,
    color: '#4f4a4a'
  },
  footer:{
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    width: '100%',
  },
  price:{
    fontSize: 15,
    fontFamily: 'Montsserat_Bold',
    fontWeight: 'bold',
    color: '#000'
  },
});