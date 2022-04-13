import styled from "styled-components/native";
import { BaseButton } from 'react-native-gesture-handler';

import { LinearGradient } from 'expo-linear-gradient';

interface BackgroundProps {
  background: string;
}

export const ContaiverView = styled.ScrollView`
  flex: 1;
`;

export const ContainerGradient = styled.View`
  height: 215px;
  width: 100%;
  background-color: #8E8E8E;
`;

export const ContainerMenus = styled.View`
  margin: 10px;
  height: 800px;

  flex-direction: row;
  flex-wrap: wrap;
  
  justify-content: center;
  align-items: center;

  /* background-color:#fff; */

`

export const Menu = styled.View`
  /* width: 30%; */
  height: 120px;
  margin-right: 10px;
  margin-bottom: 15px;
`;

export const Menu1 = styled.View`
  height: 60%;
  background-color: #fff;

  position: relative;
  align-items: center;

  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`;

export const ContainerTituloMenu = styled.View<BackgroundProps>`
  background-color: ${props => props.background};
  height: 40%;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  display: flex;
  justify-content: center;
`;

export const TextMenu = styled.Text`
  color: #fff;
  text-align: center;
  padding: 3px;
  font-weight: bold;
`;

export const TextInserir = styled.Text`
  color: #A5A5A5;
  text-align: center;
  padding: 5px;
  font-weight: bold;
`;