import { View, Text } from 'react-native';
import React from 'react';
import { Container, TextA } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Frequencia = () => {
  return (
    <Container>

      <Icon 
        name='calendar-remove' 
        size={190} 
        style={{ marginTop: 40 }} 
        color={'#C0C0C0'} 
      />

      <TextA>
        Você não esta matriculado em nenhuma diplcina no Período Acadêmico vigente!
      </TextA>

    </Container>
  )
}

export default Frequencia;