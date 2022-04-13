import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MyDrawer from './src/routes';
import homeMenu from './src/services/homeMenu';
import { usePreventScreenCapture } from 'expo-screen-capture';
import "moment/locale/pt-br";


export default function App() {
  if(Platform.OS === 'android'){
    usePreventScreenCapture();
  }
  useEffect(() => {
    async function get(){
      const menu = await AsyncStorage.getItem('@home_menu')
      if(!menu){
        await AsyncStorage.setItem('@home_menu', JSON.stringify(homeMenu))
      }

    };

    get();
  }, []);
  return (
    <>
      <StatusBar style="light" backgroundColor='#036499'/>
     <MyDrawer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
