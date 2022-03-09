import React from 'react';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Routes from './src/router';

export default function App(){
  return (
    <>
      <StatusBar style="ligth" backgroundColor="#000" translucent={false}/>
      <Routes/>
    </>
  );
};

