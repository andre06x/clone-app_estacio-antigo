import { View, Text } from 'react-native';
import React from 'react';
import {
  Container,
  TextA,
  Disciplina,
  ViewDisciplina,
  ViewFrequencia
} from './styles';

import Icon from 'react-native-vector-icons/AntDesign';


const Frequencia = () => {

  const disciplinas = [
    { discplina: "Auditoria de Sistemas", totalFaltas: "0.0" },
    { discplina: "Banco de Dados Avançado", totalFaltas: "0.0" },
    { discplina: "Implementação de Banco de dados", totalFaltas: "0.0" },
    { discplina: "Sistemas Digitais", totalFaltas: "0.0" },
  ]

  return (
    <Container>

      {/* <Icon 
        name='calendar-remove' 
        size={190} 
        style={{ marginTop: 40 }} 
        color={'#C0C0C0'} 
      />

      <TextA>
        Não existe frequência para o aluno!
      </TextA> */}
      {disciplinas.map(d => (
        <Disciplina key={d.discplina}>
          <ViewDisciplina>
            <Text style={{ fontWeight: 'bold', color: '#fff' }}>
              Disciplina
            </Text>
            <Text style={{ color: '#fff', fontWeight: '600' }}>
              {d.discplina}
            </Text>
          </ViewDisciplina>
          <ViewFrequencia style={{ shadowColor: "#171717", shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 20 }}>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ marginBottom: 20, backgroundColor: '#D2051E', height: 50, width: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                <Icon name="exclefile1" color={'#fff'} size={30} />
              </View>

              <View>
                <Text style={{ color: '#D2051E' }}>Total de faltas</Text>
                <Text style={{ color: '#D2051E', fontSize: 26 }}>{d.totalFaltas}%</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', }}>
              <View style={{ marginBottom: 20, backgroundColor: '#00ADC2', height: 50, width: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                <Icon name="exclamationcircleo" color={'#fff'} size={30} />
              </View>

              <View>
                <Text style={{ color: '#00ADC2' }}>Limites de faltas permitidas</Text>
                <Text style={{ color: '#00ADC2', fontSize: 26 }}>25%</Text>
              </View>
            </View>
          </ViewFrequencia>
        </Disciplina>
      ))}

    </Container>
  )
}

export default Frequencia;