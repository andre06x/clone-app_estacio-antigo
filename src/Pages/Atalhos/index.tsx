import React, { useEffect } from 'react';;

import { routes } from '../DrawerContent/routes';

import { Container, ViewRoute, TextName } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native';

const Atalho = ({ route, navigation }: any) => {
  const i = route.params;

  useEffect(() => {
    async function get() {


    };

    get();
  }, [])

  async function addAtalho(r) {

    let menu: any = await AsyncStorage.getItem('@home_menu');

    menu = JSON.parse(menu);
    menu[i] = {
      name: r.name,
      icon: r.icon,
      path: r.rota
    }

    await AsyncStorage.setItem('@home_menu', JSON.stringify(menu));
    navigation.navigate('Root');
  };

  return (
    <Container>
      {routes.map((r: any) => (
        <TouchableOpacity key={r.name} onPress={() => addAtalho(r)}>
          <ViewRoute key={r.name}>
            <Icon name={r.icon} size={33} color={'#3ABFCD'} />
            <TextName>{r.name}</TextName>

          </ViewRoute>
        </TouchableOpacity>
      ))}
    </Container>
  )
}

export default Atalho;