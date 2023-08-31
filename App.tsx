import 'react-native-gesture-handler';
import React from 'react';

import {useFonts, Poppins_300Light, Poppins_400Regular, Poppins_700Bold} from '@expo-google-fonts/poppins'
import { Routes } from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light, 
    Poppins_400Regular, 
    Poppins_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
    <>
      <StatusBar 
        translucent 
        backgroundColor={'transparent'}
        
      />
      <Routes/>
    </>
  );
}

