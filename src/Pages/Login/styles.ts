import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ContainerPadding = styled.View`
  margin-left: 15px;
  margin-right: 15px;
`
export const Container = styled.View`
  background-color: #0674AF;
`;
export const ContainerLogin = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #0674AF;
  justify-content: space-between;
  /* padding: 15px; */

  /* align-items: center; */
`;

export const ContainerLogo = styled.View`
  width: 300px;
  height: 200px;
  margin-bottom: 15px;
align-items: center;
display: flex;
justify-content: center;
margin: 0 auto;

`;

export const ImagemLogo = styled.Image`
  width: 100%;
  height: 100%;
  margin-top: 70px;
`;

export const MatriculaInput = styled.TextInput`
  border-bottom-width: 1px;
  border-color: #fff;
  margin-top: 65px;
  color: #fff;
`;

export const SenhaInput = styled.TextInput`
  border-bottom-width: 1px;
  border-color: #fff;
  margin-top:50px;
  color: #fff;

`;

export const ButtonLogin = styled.TouchableOpacity`
  background-color: #0585B4;
  margin-top:50px;
  padding: 25px;
  align-items:center;
  
`;

export const TextLogin = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`
export const ViewFlex = styled.View`
  flex-direction: row;
  margin-top: 17px;

`;
export const ButtonMatricula = styled.TouchableOpacity`
  background-color: #0DA4D9;
  padding: 15px;
  width: 50%;
  align-items:center;
`;

export const ButtonSenha = styled.TouchableOpacity`
  background-color: #15C1F3;
  padding: 15px;
  width: 50%;
  align-items:center;
`;

export const ViewAinda = styled.View`
  background-color: #0674AF;
  /* height: 55px; */
  align-items: center;
  justify-content: center;
`;

export const TextWhite = styled.Text`
color: #fff;
text-align: center;
`

export const TextBold = styled.Text`
  font-weight: bold;
`

