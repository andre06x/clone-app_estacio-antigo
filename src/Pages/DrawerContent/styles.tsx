import styled from 'styled-components/native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

export const DrawerSection = styled(Drawer.Section)`
  /* border-top-color: #fff, */
  
`;

export const DrawerContent2 = styled.View`
  /* background-color: #006EA3; */

`;

export const UserInfoSection = styled.ImageBackground`
  /* padding-left: 20px; */
  padding-top: 24px;
  align-items: center;
  justify-content: center;
  background-color: #006EA3;
`;

export const Nome = styled.Text`
  font-weight: bold
  font-size: 20px;
  color: #fff
  margin-bottom: 20px;
`;

export const Matricula = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 15px;
`;

export const ViewMatricula = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
`;