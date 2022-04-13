import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  margin: 10px;
`;

export const Card = styled.View`
  margin-bottom: 15px;
  border-radius: 5px;
`;

export const ViewTitle = styled.View`
  background-color: #00ADBE;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  padding: 10px;
  padding-bottom: 20px;
  padding-top: 24px;
`;

export const  ViewSituacao = styled.View`
  background-color: #fff;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  
  padding: 10px;

`;

export const ViewLabel = styled.View`
  margin-bottom: 10px;
`;

export const ViewFlex = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  /* font-weight: bold; */
  font-size: 17px;
  color:#fff;

`;

export const Label = styled.Text`
  color: #969696;
  font-weight: bold;
`;

export const Value = styled.Text`
  color: #969696;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  right: 25px;
  bottom: 25px;
  
  width: 56px;
  height: 56px;

  border-radius: 28px;

  justify-content: center;
  align-items: center;
  background-color: #0674AF;
`;