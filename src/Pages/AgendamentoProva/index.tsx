import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, TextA } from './styles';

const AgendamentoProva = () => {
  return (
    <Container>

      <Icon 
        name='calendar-check' 
        size={190} 
        style={{ marginTop: 40 }} 
        color={'#C0C0C0'} 
      />

      <TextA>
        Não existem avaliações dispníveis para agendamento.
      </TextA>

    </Container>
  )
}

export default AgendamentoProva;