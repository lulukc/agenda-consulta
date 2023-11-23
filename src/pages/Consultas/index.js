import React, { useState } from "react";
import {View, Text} from "react-native";

import {
  FormView,
  BotaoView,
  Button,
  ButtonText,
  TextoBoaVindas
} from "./styles";

export default function Consultas ({ navigation }){


  function handleButon(destino) {
    console.log(destino)
    navigation.navigate(destino)
  }

  return(
  <View>
    <Text>Consultas</Text>
  </View>
  )
}