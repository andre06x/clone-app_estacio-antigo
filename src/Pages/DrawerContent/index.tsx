import React, { useState, useCallback } from 'react';
import { View, Image,  ScrollView, TouchableWithoutFeedback } from 'react-native';
import {
  DrawerItem
} from '@react-navigation/drawer';
import { Text } from 'react-native';

import {
  Avatar,
} from 'react-native-paper';

import {
  DrawerSection,
  DrawerContent2,
  UserInfoSection,
  Nome,
  ViewMatricula,
  Matricula
} from './styles';

interface EstudanteDadosProps {
  matricula?: number;
  nome?: string;
}

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { routes } from './routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import ImagemBranca from './imagem-branca.png';

export function DrawerContent({ navigation }: { navigation: any }) {
  const [imageAvatar, setImageAvatar] = useState(Image.resolveAssetSource(ImagemBranca).uri);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const getImageData = async () => {

        try{
  
          if(isActive){

            let image: any = await AsyncStorage.getItem('@avatar_link');

            if (image) {
              setImageAvatar(image);
            }
          }
  
        }catch(err){

        }
      }
      getImageData();

      return () => {
        isActive = false;
      }
    }, [imageAvatar
    ])

  );

  function carteirinha() {
    navigation.closeDrawer();
    navigation.navigate('Carteirinha');
  }

  return (
    <View style={{ flex: 1 }}>
      <UserInfoSection source={require('./dnv2.png')}>
        <TouchableWithoutFeedback onPress={() => carteirinha()}>
          <View
            style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Avatar.Image
              source={{
                uri: imageAvatar
              }}
              size={90}
              style={{ marginBottom: 22, marginTop: 15, borderWidth: 1, paddingBottom: 5, borderColor: '#fff' }}
            />

            <View style={{ width: '100%' }}>
              <Nome>André Victor da Costa Silva</Nome>

              <ViewMatricula>
                <Icon name="face" color="#fff" size={20} />
                <Matricula>Matricula: 201908274417</Matricula>
                <Icon name="menu-right" color="#fff" size={20} />
              </ViewMatricula>
            </View>
          </View>
        </TouchableWithoutFeedback>

      </UserInfoSection>
      <ScrollView
        style={{ padding: 0 }}
      >
        <DrawerContent2>

          <DrawerSection>
            {routes.map(r => (
              <DrawerItem
                pressColor="#006EA3"
                activeBackgroundColor='#f00'
                key={r.name}
                label={() => (<Text style={{ color: 'black' }}>{r.name}</Text>)}
                onPress={() => navigation.navigate(r.rota, r.title)}
                icon={({ color, size }) => (
                  <Icon
                    name={r.icon}
                    color={color}
                    size={r.size ? r.size : 25}
                  />
                )}
              />
            ))}

          </DrawerSection>

        </DrawerContent2>
      </ScrollView>

    </View>

  )
}


