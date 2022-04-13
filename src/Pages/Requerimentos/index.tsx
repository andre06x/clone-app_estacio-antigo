import React from 'react';
import { View, Text } from 'react-native';

import {
  Container,
  Card,
  ViewSituacao,
  ViewTitle,

  ViewFlex,
  ViewLabel,

  Label,
  Title,
  Value,

  Button
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

const AtendimentoAgendado = () => {
  const atendimentos = [
    {
      id: 1,
      motivo: 'Declaração de Matricula com Quadro de Horário', situacao: 'Deferido',
      data: '04/11/2021',
      protocolo: '29662196',
    },
    {
      id: 1,
      motivo: 'Declaração de Matricula', situacao: 'Deferido',
      data: '19/08/2021',
      protocolo: '29662193',
    },
    {
      id: 1,
      motivo: 'Histórico Escolar', situacao: 'Deferido',
      data: '19/08/2021',
      protocolo: '29662192',
    }
  ]
  return (
    <View>
      <Container>
        {atendimentos.map((a, i) => (
          <Card key={i}>
            <ViewTitle>
              <Title>
                {`${i + 1}. ${a.motivo}`}
              </Title>
            </ViewTitle>
            <ViewSituacao>

              <ViewLabel>
                <Label>Situacao</Label>
                <Value>{a.situacao}</Value>
              </ViewLabel>

              <ViewFlex>

                <ViewLabel>
                  <Label>Data</Label>
                  <Value>{a.data}</Value>
                </ViewLabel>

                <ViewLabel>
                  <Label>protocolo</Label>
                  <Value>{a.protocolo}</Value>
                </ViewLabel>

              </ViewFlex>


            </ViewSituacao>
          </Card>
        ))}


      </Container>
      <Button>
          <Icon name='add' color="#fff" size={28} />
      </Button>
    </View>

  )
}

export default AtendimentoAgendado;