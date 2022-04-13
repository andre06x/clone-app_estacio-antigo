import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../src/Pages/Home/index';
import Login from '../src/Pages/Login/index';
import Carteirinha from '../src/Pages/Carteirinha';
import Atalho from './Pages/Atalhos';

import { DrawerContent } from './Pages/DrawerContent';
import HeaderTitle from './Components/HeaderTitle';
// import Carteirinha from './Pages/Carteirinha';
import { View, Text } from 'react-native';
import CameraPage from './Pages/Camera';
import ImagePickerExample from './Pages/ImagePicker';
import AtendimentoAgendado from './Pages/AtendimentoAgendado';
import AgendamentoProva from './Pages/AgendamentoProva';
import Boletos from './Pages/Boletos';
import DatasProvas from './Pages/DatasProvas';
import Frequencia from './Pages/Frequencia';
import Historico from './Pages/Historico';
import QuadroHorarios from './Pages/QuadroHorarios';
import Requerimentos from './Pages/Requerimentos';
import NotasProvas from './Pages/NotasProvas';
import AcessarFora from './Pages/AcessarFora';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Home"
          component={Login}
        />

        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Root"
          component={MyDrawer}
        />

        <Stack.Screen
          name="AcessarFora"
          component={AcessarFora}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#0674AF',

            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: "200"
            },
          }}
        />



        <Stack.Screen
          name="NotasProvas"
          component={NotasProvas}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#0674AF',

            },
            headerTintColor: '#fff',
            headerTitle: 'Notas de provas',
            headerTitleStyle: {
              fontWeight: "200"
            },
          }}
        />

        <Stack.Screen
          name="Frequencia"
          component={Frequencia}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#0674AF',

            },
            headerTintColor: '#fff',
            headerTitle: 'Frequência',
            headerTitleStyle: {
              fontWeight: "200"
            },
          }}
        />

        <Stack.Screen
          name="Requerimento"
          component={Requerimentos}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#0674AF',

            },
            headerTintColor: '#fff',
            headerTitle: 'Requerimentos',
            headerTitleStyle: {
              fontWeight: "200"
            },
          }}
        />

        <Stack.Screen
          name="QuadroHorarios"
          component={QuadroHorarios}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#0674AF',

            },
            headerTintColor: '#fff',
            headerTitle: 'Quadro de horários',
            headerTitleStyle: {
              fontWeight: "200"
            },
          }}
        />






        <Stack.Screen
          name="Historico"
          component={Historico}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#0674AF',

            },
            headerTintColor: '#fff',
            headerTitle: 'Historico escolar',
            headerTitleStyle: {
              fontWeight: "200"
            },
          }}
        />


        <Stack.Screen
          name="DatasProvas"
          component={DatasProvas}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#0674AF',

            },
            headerTintColor: '#fff',
            headerTitle: 'Datas de Provas',
            headerTitleStyle: {
              fontWeight: "200"
            },
          }}
        />

        <Stack.Screen
          name="Boletos"
          component={Boletos}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#0674AF',

            },
            headerTintColor: '#fff',
            headerTitle: 'Boletos',
            headerTitleStyle: {
              fontWeight: "200"
            },
          }}
        />

        <Stack.Screen
          name="AgendamentoProva"
          component={AgendamentoProva}
          options={{
            headerStyle: {
              backgroundColor: '#0674AF'
            },
            headerTintColor: '#fff',
            headerTitle: 'Agendamento de prova',
            headerTitleStyle: {
              fontWeight: "200"
            }
          }}
        />

        <Stack.Screen
          name="AtendimentoAgendado"
          component={AtendimentoAgendado}
          options={{
            headerStyle: {
              backgroundColor: '#0674AF'
            },
            headerTintColor: '#fff',
            headerTitle: 'Atendimento Agendado',
            headerTitleStyle: {
              fontWeight: "200"
            }
          }}
        />



        <Stack.Screen
          name="Carteirinha"
          component={Carteirinha}
          options={{
            headerStyle: {
              backgroundColor: '#0674AF'
            },
            headerTintColor: '#fff',
            headerTitle: 'Carteirinha de estudante',
            headerTitleStyle: {
              fontWeight: "200"
            }
          }}
        />
        <Stack.Screen
          name="Atalho"
          component={Atalho}
          options={{
            headerStyle: {
              backgroundColor: '#0674AF'
            },
            headerTintColor: '#fff',
            headerTitle: 'Adicionar atalho',
            headerTitleStyle: {
              fontWeight: "200"
            }
          }}
        />
        <Stack.Screen
          name="Camera"
          component={CameraPage}
          options={{
            headerShown: false
          }}

        />
        <Stack.Screen
          name="ImagePicker"
          component={ImagePickerExample}
          options={{
            headerStyle: {
              backgroundColor: '#0674AF'
            },
            headerTintColor: '#fff',
            headerTitle: 'Escolher Imagem',
            headerTitleStyle: {
              fontWeight: "200"
            }
          }}
        />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{
      drawerStyle: {
        width: 305,
      },
    }} drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        component={Home}
        name="Inicio"
        options={{
          // title: 'Estácio',
          headerTitle: props => <HeaderTitle />,
          headerStyle: {
            backgroundColor: '#0674AF',
          },
          headerTintColor: '#fff',
        }}
      />
      {/* <Drawer.Screen
        name="Carteirinha"
        options={{
          // title: 'Estácio',
          headerTitle: props => <HeaderTitle />,
          headerStyle: {
            backgroundColor: '#0674AF',
          },
          headerTintColor: '#fff',

        }} component={Carteirinha} /> */}


    </Drawer.Navigator>
  );
}



export default Routes;