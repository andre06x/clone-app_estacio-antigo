import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BaseButton, BorderlessButton, RectButton } from 'react-native-gesture-handler';

import { LinearGradient } from 'expo-linear-gradient';
import { ContaiverView, ContainerGradient, ContainerMenus, Menu, Menu1, ContainerTituloMenu, TextMenu, TextInserir } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import IconEntypo from 'react-native-vector-icons/Entypo';

const Home = ({ navigation }: any) => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function get() {
      const menu = await AsyncStorage.getItem('@home_menu');
      setMenus(JSON.parse(menu || '{}'));

      setLoading(false)
    }

    get();


  }, [menus]);


  return (
    <ContaiverView>
      <ContainerGradient>
        {/* LinearGradient */}
        <LinearGradient
          // Background Linear Gradient
          colors={['#FBFBFB', 'transparent']}
          style={styles.background}
        />
      </ContainerGradient>
      <ContainerMenus>

        {loading === false && (
          menus.map((m, i) => (

            m.name === '' ? (
              <RectButton onPress={() => navigation.navigate('Atalho', i)} style={{ width: '30%', height: 120, marginRight: 10, marginBottom: 15 }} key={i}>
                <Menu
                  // onStartShouldSetResponder={() => navigation.navigate('Atalho')}
                  style={
                    {
                      borderColor: '#A5A5A5',
                      borderStyle: 'dashed',
                      borderWidth: 3,
                      borderRadius: 1,
                      width: '100%'
                    }
                  }
                  key={i}

                >
                  <Menu1>
                    <Ionicons style={{ marginTop: 8 }} name='add-circle-outline' color="#A5A5A5" size={60} />
                  </Menu1>

                  <ContainerTituloMenu background='#fff'>
                    <TextInserir>Inserir Atalho</TextInserir>
                  </ContainerTituloMenu>


                </Menu>
              </RectButton>


            ) : (
              <Menu key={i} style={{ width: '30%', shadowColor: "#171717", shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate(m.path)}>
                  <Menu1>
                    <Icon style={{ marginTop: 8 }} name={m.icon} color="#04B0C0" size={45} />
                    <IconEntypo style={{ position: 'absolute', right: 3, top: 5 }} name="dots-three-vertical" color="#AAAAAA" size={18} />
                  </Menu1>

                  <ContainerTituloMenu background='#00ADBE'>
                    <TextMenu>{m.name}</TextMenu>
                  </ContainerTituloMenu>
                </TouchableOpacity>
              </Menu>
            )

          ))
        )}


      </ContainerMenus>


    </ContaiverView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});

export default Home;