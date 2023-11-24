import React, { useState ,useEffect } from "react";
import {View, Text} from "react-native";

import api from "../../api"

import {
  FormView,
  BotaoView,
  Button,
  ButtonText,
  TextoBoaVindas
} from "./styles";

export default function Main ({ navigation }){
  const [paceiente, setPaceiente] = useState('');

  useEffect(() => {
    api.get("/paciente/find/65608a5d418a4708377f34e9").then(res =>{
      setPaceiente(res.data)   
    }).catch(error => {
      console.log(error);
    })

}, [])

  function handleButon(destino) {
    navigation.navigate(destino)
  }

  return(
  <View>
    <FormView>
      <TextoBoaVindas>{`Olá ${paceiente.nome}`}</TextoBoaVindas>
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