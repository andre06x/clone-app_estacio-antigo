import { View, Text, useWindowDimensions, ScrollView } from 'react-native';
import React from 'react';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import CircularProgress from 'react-native-circular-progress-indicator';

import { Container, Title, ViewFlex } from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const FirstRoute = () => (
  <Container >
    <ViewFlex>
      <View>
        <Title>CR DO PERÍODO</Title>
        <Title>2021.2</Title>
      </View>
      <View >
        <Icon name="octagram" size={70} color={'#646464'} />
        <Text style={{ color: '#fff', position: 'absolute', top: 25, left: 20, fontWeight: 'bold' }}>8,92</Text>
      </View>

    </ViewFlex>

    <ViewFlex style={{ backgroundColor: '#fff', padding: 8, marginTop: 20, borderRadius: 3 }}>
      <View>
        <Text style={{ fontWeight: 'bold', color: '#8D8D8D', fontSize: 15 }}>Disciplina</Text>
        <Text style={{ color: '#8D8D8D', fontSize: 18 }}>Algoritimos Avançados</Text>
      </View>
      <View style={{ marginRight: 20 }}>
        <Title>7</Title>
        <Text>AP</Text>
      </View>
    </ViewFlex>
  </Container>

);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }} />
);

const Historico = () => {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: '2021.2' },
    { key: 'second', title: '2021.1' },
    { key: 'three', title: '2020.2' },
    { key: 'four', title: '2020.1' },
    { key: 'five', title: '2019.2' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: FirstRoute,
    three: FirstRoute,
    four: FirstRoute,
    five: FirstRoute
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#0674AF' }}
    />
  );

  return (
    <>
      <>
        <View style={{ backgroundColor: '#0674AF', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress
            inActiveStrokeColor={'#fff'}
            activeStrokeColor={'#77CFC9'}
            inActiveStrokeWidth={10}
            activeStrokeWidth={10}

            // inActiveStrokeOpacity={10}
            value={9.19}
            radius={80}
            duration={20}
            textColor={'#ecf0f1'}
            maxValue={10}
            title={'CR GERAL'}
            titleColor={'white'} />
        </View>

        <TabView
          renderTabBar={renderTabBar}
          // style={{ backgroundColor: '#0674AF' }}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }} />
      </>


    </>

  )
}

export default Historico;