import React, { useState, useEffect } from "react";
import {View, FlatList, Text} from "react-native";

import api from "../../api"

import {
  EspecialidadeView,
  MensagemText,
  EspecialidadeText,
  ItemView,
  NomeText,
  TitleText,
  SubmitButton,
  SubmitButtonText
} from "./styles";

export default function MarcarConsulta ({ route, navigation }){

  const [especialidade, setEspecialidade] = useState(""); 
  const [selectedId, setSelectedId] = useState("");
  const [listaMedicos, setListaMedicos] = useState([]); 

  function handleButon() {
    api.post("/consulta",{
      "pacienteID": "655fee9acf8c5dc6d2eeca18",
      "medicoID": selectedId
    })
    alert("Consulta marcada")
    navigation.navigate("Principal")
  }



  useEffect(() => {
    const listaIdString = route.params.paramKey
    api.get(`/filtro/${listaIdString}`).then(res =>{
      setEspecialidade(res.data.especialidade.especialidade)  
      setListaMedicos(res.data.listasMedicos)
    }).catch(error => {
      console.log(error);
    })
  }, [])

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <ItemView  style={{backgroundColor}}>
      <NomeText onPress={onPress} style={{color: textColor}} >{`Nome: ${item.nome}`}</NomeText>
      <TitleText style={{color: textColor}} >{`crm: ${item.crm}`}</TitleText>
    </ItemView>
  );

  const renderItem = ({item}) => {
    const backgroundColor = item._id === selectedId ? '#6e3b6e' : '#DCDCDC';
    const color = item._id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item._id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return(
  <View>
    <EspecialidadeView>
      <MensagemText>A especialidade sugerida é</MensagemText>
      <EspecialidadeText>{especialidade} </EspecialidadeText>
      <MensagemText>lista de medicos com essa especialidade</MensagemText>
    </EspecialidadeView>
    <FlatList 
          data={listaMedicos}
          keyExtractor={item => item._id}
          renderItem={renderItem}
          extraData={selectedId}
        />
    <SubmitButton onPress={handleButon}>
      <SubmitButtonText>Marcar consulta</SubmitButtonText>
    </SubmitButton>
  </View>
  )
}