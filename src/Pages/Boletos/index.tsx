import { View, Text, useWindowDimensions } from 'react-native';
import React from 'react';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const Boletos = () => {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Pendentes' },
    { key: 'second', title: 'Não Pendentes' },
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
    style={{backgroundColor: '#0674AF'}}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  )
}

export default Boletos;