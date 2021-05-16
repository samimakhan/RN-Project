import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import BackGroundImage from './assets/bg-transparent.png';
import ProfileScreen from './Screens/ProfileScreen';
import HomeScreen from './Screens/HomeScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
  'playfair-display':require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
  'open-sans':require('./assets/fonts/OpenSans-SemiBold.ttf'),
});

const YourApp = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
  return (
    <HomeScreen />
  );
  }
  else {
  return(
   <AppLoading 
     startAsync={getFonts}
     onFinish={()=> setFontsLoaded(true)}
     onError={console.warn}
     
     />

  )
  }
}



export default YourApp;
