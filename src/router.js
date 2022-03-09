import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Icon from "react-native-feather";
import { TouchableOpacity } from "react-native";

import Home from './pages/Home';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

function Routes(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="home" 
          component={Home}
          options={{
            title: 'Alugue',
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold'
            },
            headerRight: () =>(
              <TouchableOpacity>
                <Icon.ShoppingBag stroke="black"/>
              </TouchableOpacity>
            )
          }}
        />
        <Stack.Screen 
          name="detail" 
          component={Detail}
          options={{
            title: 'Detalhe',
            headerTitleStyle: {
              fontFamily: 'Montserrat-Bold'
            },
            headerRight: () =>(
              <TouchableOpacity>
                <Icon.ShoppingBag stroke="black"/>
              </TouchableOpacity>
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

export default Routes;