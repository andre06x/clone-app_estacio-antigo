import React, { useState } from 'react';
import { View } from 'react-native';

import {
  ContainerLogin,
  ContainerLogo,
  ImagemLogo,
  MatriculaInput,
  SenhaInput,
  ButtonLogin,
  TextLogin,
  ButtonMatricula,
  ButtonSenha,
  ViewFlex,
  ViewAinda,
  TextWhite,
  TextBold,
  ContainerPadding
} from './styles';

const Home = ({ navigation }: { navigation: any }) => {

  const [formMatricula, setFormMatricula] = useState('');
  const [formSenha, setFormSenha] = useState('');

  const handleLogin = async () => {
    navigation.navigate('Root'); 
  };

  return (
    <ContainerLogin>
      <ContainerPadding>
        <ContainerLogo>
          <ImagemLogo source={require('./imagem.png')} />
        </ContainerLogo>

        <MatriculaInput
          placeholder="Matricula"
          placeholderTextColor="white"
          keyboardType="numeric"
          value={formMatricula}
          onChangeText={(text) => setFormMatricula(text)}
        />

        <SenhaInput
          placeholder='Senha'
          placeholderTextColor="white"
          onChangeText={(text) => setFormSenha(text)}
          value={formSenha}
        />

        <ButtonLogin onPress={() => handleLogin()}>
          <TextLogin>LOGIN</TextLogin>
        </ButtonLogin>
      </ContainerPadding>

      <ViewAinda>
        <ViewFlex>
          <ButtonMatricula>
            <TextLogin>Esqueci minha matrícula</TextLogin>
          </ButtonMatricula>

          <ButtonSenha>
            <TextLogin>Esqueci minha senha</TextLogin>
          </ButtonSenha>
        </ViewFlex>

        <View style={{ backgroundColor: '#005A86', width: '100%', height: 30, justifyContent: 'center' }}>
          <TextWhite>Ainda não é aluno? <TextBold>Increva-se no vestibular.</TextBold> </TextWhite>
        </View>
        
      </ViewAinda>
    </ContainerLogin>

  )
}

export default Home;