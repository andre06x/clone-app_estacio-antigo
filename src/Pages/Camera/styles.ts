import styled from 'styled-components/native';
import { Camera } from 'expo-camera';

export const CameraStyled = styled(Camera)`
  flex: 1;
`;

export const Botao = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: #fff;
  position: absolute;
  bottom: 10px;
`;
