import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width - 80;
console.log(windowWidth)

export const TextTitle = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const ViewHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${windowWidth}px;
`;

export const ViewIcon = styled.View`
  /* justify-content: flex-end; */
`;