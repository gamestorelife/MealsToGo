 import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
// eslint-disable-next-line max-len
import { ResturantsScreen } from './src/features/restaurants/screens/RestaurantsScreen';

 
export default function App() {
 

  return (
    <>

< ResturantsScreen />

      <ExpoStatusBar style="auto" />
    </>
  );
}


