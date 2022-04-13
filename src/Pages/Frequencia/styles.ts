import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 5px;
  background-color: #EDEDED;
  height: 100%;
  /* align-items: center; */
`;

export const TextA = styled.Text`
  color: #969696;
  text-align: center;
  font-size: 18px;
  margin-left: 15%;
  margin-right: 15%;
`;

export const Disciplina = styled.View`
  flex-direction: column;
  margin-bottom: 10px;
`;

export const ViewDisciplina = styled.View`
  background-color: #00ADBE;
  flex-direction: column;
  padding: 10px;

  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`;

export const ViewFrequencia = styled.View`
  background: #fff;
  padding: 10px;

  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
`;