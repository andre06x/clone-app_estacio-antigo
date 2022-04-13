import { View, Text } from 'react-native';
import React from 'react';
import { Container, TextA } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Frequencia = () => {
  return (
    <Container>

      <Icon 
        name='bookmark-check-outline' 
        size={190} 
        style={{ marginTop: 40 }} 
        color={'#C0C0C0'} 
      />

      <TextA>
        Não existem lançamentos de notas para você no Periodo Acadêmico vigente!
      </TextA>

    </Container>
  )
}

export default Frequencia;