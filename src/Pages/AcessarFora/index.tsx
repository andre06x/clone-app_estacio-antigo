import React from 'react';
import { View, Text } from 'react-native';
import {
  Button,
  Container,
  TextA
} from './styles';

const AcessarFora = ({ route, navigation }: any) => {
  const header = route.params;
  console.log(route)
  navigation.setOptions({ title: header })

  return (
    <Container>
      {
        header === 'Sava' ? (
          <>
            <View>
              <TextA>André, agora você pode acessar o conteúdo de suas aulas.</TextA>
              <TextA>Tenha acesso às aulas online, livros, videos e muito mais.</TextA>
              <TextA>Bom estudo!</TextA>
            </View>

          <View>
          <Button>
              <Text style={{ color: '#fff' }}>DISCIPLINAS PRESENCIAIS</Text>
            </Button>

            <Button>
              <Text style={{ color: '#fff' }}>DISCIPLINAS ONLINE</Text>
            </Button>
          </View>
          </>
        ) : (
          <>
            <View>
              <TextA>André, agora você pode acessar a Biblioteca Virtual.</TextA>
              <TextA>Tenha acesso aos seus livros.</TextA>
              <TextA>Bom estudo!</TextA>
            </View>
            <Button>
              <Text style={{ color: '#fff' }}>ACESSAR</Text>
            </Button>
          </>
        )
      }

    </Container>
  )
}

export default AcessarFora;