import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { CameraStyled, Botao } from './styles';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

const CameraPage = () => {
  const cameraRef = useRef();

  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState('');
  const [status, requestPermission] = MediaLibrary.usePermissions();


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      const teste = requestPermission()
      console.log(teste);

      if (status === 'granted') {
        setHasPermission('granted')
      }
    })();
  }, []);

  if (hasPermission !== 'granted') {
    <Text>Erro</Text>
  }

  const __takePicture = async () => {
    if (!cameraRef.current) return 0;

    if(cameraRef.current){

      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      await MediaLibrary.saveToLibraryAsync(photo.uri);
    }
  }
  
  return (
    <CameraStyled ref={(r: any) => {
      cameraRef.current = r
    }}
      type={type}>
      <Botao onPress={__takePicture}></Botao>
    </CameraStyled>
  )
};

export default CameraPage;