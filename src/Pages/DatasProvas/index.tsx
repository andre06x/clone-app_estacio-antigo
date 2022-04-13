import { View, Text, useWindowDimensions } from 'react-native';
import React from 'react';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { Container, TextA } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FirstRoute = () => (
  <Container style={{ flex: 1, backgroundColor: '#fff' }} >
    <Icon name="calendar-month" size={190}
      style={{ marginTop: 30 }}
      color={'#C0C0C0'} />

    <TextA>
      Não existe datas de provas para dicliplinas presenciais!
    </TextA>
  </Container>
);

const SecondRoute = () => (
  <Container style={{ flex: 1, backgroundColor: '#fff' }} >
    <Icon name="calendar-month" size={190}
      style={{ marginTop: 30 }}
      color={'#C0C0C0'} />

    <TextA>
      Não há registros!
    </TextA>
  </Container>);



const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const DatasProvas = () => {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Presencial' },
    { key: 'second', title: 'Online' },
  ]);


  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#0674AF' }}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      // style={{ backgroundColor: '#0674AF' }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  )
}

export default DatasProvas;