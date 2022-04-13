import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  margin: 10px;
  background-color: #fff;
  border-radius: 3px;
  padding: 10px;
  justify-content: space-between;
`;

export const LogoImagem = styled.Image`
  width: 200px;
  height: 55px;
  margin: 0 auto;
`;

export const ContainerImagemProfile = styled.View`
  border-width: 2px;
  height: 101px;
  border-radius: 50px;
  margin: 0 auto;
  margin-top: 10px;
  border-color: #B0D3E6;
  position: relative;
`;

export const ImagemProfile = styled.Image`
  width: 97px;
  height: 97px;
  border-radius: 50px;
  margin: 0.5px;
`;

export const ContainerCamera = styled.View`
  width: 30px;
  height: 30px;
  background-color: #64CBBF;
  position: absolute;
  right: 0;
  bottom: 0;
  border-width: 2.5px;
  border-color: #fff;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const ContainerInfo = styled.View`
 margin-top: 7px;
`;

export const ViewInfo = styled.View`
  margin-bottom: 16px;
`;

export const ViewRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const LabelInfo = styled.Text`
  color: #797979;
  font-weight: bold;
  font-size: 13px;
`;

export const DataInfo = styled.Text`
  color: #8A8A8A;
  font-size: 16px;
`;

export const TextValidator = styled.Text`
  color: #8E8E8E;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  margin: 0 15px;
`;