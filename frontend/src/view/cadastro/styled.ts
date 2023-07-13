import styled from 'styled-components/native';

export const CadastroContainer = styled.View`
  height: 100vh;
  background-color: blue;
`;

export const CadastroHeader = styled.View`
  height: 20%;
  background-color: transparent;
`;

export const CadastroContentScroll = styled.ScrollView`
  margin-top: 25px;
`;

export const CadastroContent = styled.View`
  height: 80%;
  padding-horizontal: 25px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  background-color: white;
`;

export const PetTitle = styled.Text`
  font-size: 25px;
  font-weight: 700;
  color: black;
  margin-top: 20px;
`;

export const PetSubTitle = styled.Text`
  font-size: 10px;
  margin-bottom: 15px;
`;
