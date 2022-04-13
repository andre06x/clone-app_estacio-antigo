import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ViewHeader, ViewIcon, TextTitle } from './styles';

function HeaderTitle(){
  return (
    <ViewHeader>
      <TextTitle>Estácio</TextTitle>
      <ViewIcon>
        <Icon name='notifications' color="#fff" size={25}/>
      </ViewIcon>
    </ViewHeader>
  )
}

export default HeaderTitle;