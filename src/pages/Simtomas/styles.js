import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

export const PrincipalView = styled.View`
  flex-direction: column;
  align-items: center;
  background-color : #F1F1F1;
  width: 100%;
  flex: 1
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

export const TitleText = styled.Text`
  font-size: 15px;
`;

export const ItemView = styled.View`
  background: #C0C0C0;
  padding: 20px;
  padding: 8px 16px;
`;

export const SintomasSelecionadosViewText = styled.Text`
  font-size: 15px;
`;

export const SintomasSelecionadosView = styled.View`
  background: #fff;
  padding: 20px;
  padding: 8px 16px;
  width: 100%;
  max-height: 200px;
`;

