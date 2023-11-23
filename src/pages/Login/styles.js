import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

export const PrincipalView = styled.View`
  flex-direction: column;
  align-items: center;
  background-color : #F1F1F1;
  width: 100%;
  flex: 1
`;

export const LoginView = styled.View`
  flex-direction: column;
  align-items: center;
  background-color : #fff;
  margin: 15px;
  padding: 30px;
  border-radius: 6px;
`;

export const BoasVndas = styled.Text`
  font-size: 45px;
  margin: 15px;
  font-weight: bold;
`;
export const Instrucoes = styled.Text`
  font-size: 16px;
  margin: 15px;
  color: #999;
`;

export const FormInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  align-self: stretch;
  margin-top: 15px;
  padding: 10px 12px;
  font-size: 16px;
  border: #666;
  border-radius: 4px;
  height: 44px;
`;


export const ImangemRotas = styled.Image`
  width: 100%;
  height: 200px;
`;

export const ImangemLogo = styled.Image`
  width: 100px;
  height: 100px
`;

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