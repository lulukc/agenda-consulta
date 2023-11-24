import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';



export const SubmitButton = styled(RectButton)`
  align-self: stretch;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  background: #ee4d64;
  border-radius: 4px;
  padding: 0 12px;
  height: 44px;
`;

export const SubmitButtonText = styled.Text`
  color: #eee;
  font-size: 16px;
  font-weight: bold;
`;

export const NomeText = styled.Text`
  font-size: 20px;
`;

export const EspecialidadeView = styled.View`
  flex-direction: column;
  align-items: center;
  background-color : #F1F1F1;
  width: 100%;

`;
export const MensagemText = styled.Text`
  font-size: 15px;

`;

export const EspecialidadeText = styled.Text`
  font-size: 20px;

`;

export const TitleText = styled.Text`
  font-size: 15px;

`;

export const ItemView = styled.View`
  padding: 20px;
  padding: 8px 16px;
  width: 100%;
`;