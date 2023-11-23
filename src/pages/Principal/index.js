import React, { useState } from "react";
import {View, Text} from "react-native";

import {
  FormView,
  BotaoView,
  Button,
  ButtonText,
  TextoBoaVindas
} from "./styles";

export default function Main ({ navigation }){
  const [destino, setDestino] = useState('');

  function handleButon(destino) {
    console.log(destino)
    navigation.navigate(destino)
  }

  return(
  <View>
    <FormView>
      <TextoBoaVindas>Olá Fulado</TextoBoaVindas>
    </FormView>
    <BotaoView>
      <Button onPress={() => handleButon("Consultas")}>
          <ButtonText>Historico de consultas</ButtonText>
      </Button>
      <Button onPress={() => handleButon("Simtomas")}>
          <ButtonText>Nova consulta</ButtonText>
      </Button>
    </BotaoView>
  </View>
  )
}