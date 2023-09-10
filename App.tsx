import 'react-native-gesture-handler';
import React from 'react';
import Toast from 'react-native-toast-message';

import {useFonts, Poppins_300Light, Poppins_400Regular, Poppins_700Bold} from '@expo-google-fonts/poppins'
import { Routes } from './src/routes';
import { StatusBar } from 'react-native';
import { AppProvider } from './src/hooks';

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
    <AppProvider>
      <StatusBar 
        translucent 
        backgroundColor={'transparent'}
        
      />
      <Routes/>
      <Toast/>
    </AppProvider>
  );
}

