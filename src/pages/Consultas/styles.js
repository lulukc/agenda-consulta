import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

export const PrincipalView = styled.View`
  flex-direction: column;
  align-items: center;
  background-color : #F1F1F1;
  width: 100%;
  flex: 1
`;
export const FormView = styled.View`
  flex-direction: row;
  align-items: center;
  background-color : #5A6978;
  padding: 30px;
`;

export const TextoBoaVindas = styled.Text`
  font-size: 45px;
  margin: 15px;
  font-weight: bold;
  color: #fff;
`;


export const FormButton = styled(RectButton)`
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background: #ee4d64;
  border-radius: 6px;
  padding: 10px 12px;
  
`;

export const BotaoView = styled.View`
  flex-direction: row ;
  align-items: center;
  background-color : #FFF;
  justify-content: space-between ;
  padding: 15px;
`;

export const Button = styled(RectButton)`
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background: #ee4d64;
  border-radius: 15px;
  padding: 12px;
  height: 100px;
  width: 145px;
`;

export const ButtonText = styled.Text`
  color: #eee;
  font-size: 16px;
  font-weight: bold;
`;