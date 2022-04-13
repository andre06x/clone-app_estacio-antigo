import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import {
  Container,
  LogoImagem,
  ContainerImagemProfile,
  ImagemProfile,
  ContainerCamera,
  ContainerInfo,
  ViewInfo,
  DataInfo,
  LabelInfo,
  ViewRow,
  TextValidator
} from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface EstudanteDadosProps {
  nome?: string;
  cpf?: number;
  curso?: string;
  data_nascimento?: string;
  matricula?: number;
  validade?: string;
}

const Home = ({ navigation }: any) => {
  const [imageAvatar, setImageAvatar] = useState('./imagem-branca-grande.png');

  useEffect(() => {
    (async () => {

      let image: any = await AsyncStorage.getItem('@avatar_link');

      if (image !== '') {
        setImageAvatar(image);
      }

    })();

  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.cancelled) {
      console.log(result.uri);
      // setImage(result.uri);
      setImageAvatar(result.uri);

      try {
        await AsyncStorage.setItem('@avatar_link', result.uri);
      } catch (e) {
        // saving error
      }
    }
  };

  return (
    <Container 
      style={{ 
        shadowColor: "#171717", 
        shadowOffset: { width: -2, height: 4 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 3, 
        elevation: 20 }}
      >
      <View>
        <LogoImagem source={
          require('./Logo.png')
        } />
        <ContainerImagemProfile onStartShouldSetResponder={pickImage}>
          <ImagemProfile
            source={{
              uri: imageAvatar
            }}
          />
          <ContainerCamera>
            <Icon name='camera' color="#fff" size={17} />
          </ContainerCamera>
        </ContainerImagemProfile>

        <ContainerInfo>
          <ViewInfo>
            <LabelInfo>Nome</LabelInfo>
            <DataInfo>André Victor da Costa Silva</DataInfo>
          </ViewInfo>

          <ViewRow>
            <ViewInfo style={{ width: '50%' }}>
              <LabelInfo>CPF</LabelInfo>
              <DataInfo>123.456.789-00</DataInfo>
            </ViewInfo>

            <ViewInfo style={{ width: '50%' }}>
              <LabelInfo>Data de nascimento</LabelInfo>
              <DataInfo>01/2/1930</DataInfo>
            </ViewInfo>
          </ViewRow>

          <ViewInfo>
            <LabelInfo>Curso</LabelInfo>
            <DataInfo>Sistemas de Informação</DataInfo>
          </ViewInfo>

          <ViewRow>
            <ViewInfo style={{ width: '50%' }}>
              <LabelInfo>Matrícula</LabelInfo>
              <DataInfo>201908274417</DataInfo>
            </ViewInfo>

            <ViewInfo style={{ width: '50%' }}>
              <LabelInfo>Validade</LabelInfo>
              <DataInfo>20/03/2000</DataInfo>
            </ViewInfo>
          </ViewRow>

        </ContainerInfo>
      </View>

      <TextValidator>
        Válida mediante apresentação de documento de identidade com foto.
      </TextValidator>

    </Container>
  )
}

export default Home;