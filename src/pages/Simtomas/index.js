import React, {useState, useEffect} from 'react';
import {FlatList} from "react-native";


import api from "../../api"

import {
  PrincipalView,
  FormInput,
  SubmitButton,
  SubmitButtonText,
  TitleText,
  ItemView,

  SintomasSelecionadosView,
  SintomasSelecionadosViewText
  
} from "./styles";

export default function Simtomas ({ navigation }){
  const [search, setSearch] = useState(''); 
  const [filteredData, setFilteredData] = useState([]); 
  const [masterData, setMasterData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
      api.get("/").then(res =>{
        setFilteredData(res.data)  
        setMasterData(res.data)  
      }).catch(error => {
        console.log(error);
      })

  }, [])

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter(
        function (item) {
          if (item.sintoma) {
            const itemData = item.sintoma.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          }
      });
      setFilteredData(newData);
    } else {
      setFilteredData(masterData);
    }
    setSearch(text);
  };

  const Item = ({item, isAdicionar}) => (
    <ItemView  >
      <TitleText onPress={()=> IncluirSintomasSelecionados(item.sintomaId, isAdicionar)}>{item.sintoma}</TitleText>
    </ItemView>
  );


  function handleButon() {
    let listaIdString = "";
    selectedData.forEach((s)=>{
      listaIdString = listaIdString.concat(`${s.sintomaId},`)
    });
    listaIdString = listaIdString.slice(0,listaIdString.length -1);
    navigation.navigate("MarcarConsulta", {
      paramKey: listaIdString,
    });
    
  }


  function IncluirSintomasSelecionados(id, isAdicionar){
    const selecionado = masterData.filter(item => item.sintomaId === id)
    if (isAdicionar) {
      setSelectedData([...selectedData , selecionado[0]])
    } else {
      const listaSelecionados = [...selectedData]
      listaSelecionados.splice(listaSelecionados.indexOf(selecionado),1)
      setSelectedData(listaSelecionados)
    }
  }

  return(
  <PrincipalView>
          <FormInput
            onChangeText={(text) => searchFilter(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Procure Aqui"
        />
        <FlatList 
          data={filteredData}
          keyExtractor={item => item.sintomaId}
          renderItem={({item}) => <Item item={item} isAdicionar={true} />}
        />
        <SintomasSelecionadosView>
          <SintomasSelecionadosViewText>Sintomas selecionados</SintomasSelecionadosViewText>
          { selectedData.length > 0 &&
                      <FlatList 
                      data={selectedData}
                      keyExtractor={item => item.sintomaId}
                      renderItem={({item}) => <Item item={item} isAdicionar={false}  />}
                      />
          }
        </SintomasSelecionadosView>
        
        <SubmitButton onPress={handleButon}>
          <SubmitButtonText>Procurar especialista</SubmitButtonText>
        </SubmitButton>
  </PrincipalView>
  )
}