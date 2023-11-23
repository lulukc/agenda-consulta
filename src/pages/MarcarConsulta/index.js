import React, { useState, useEffect } from "react";
import {View, FlatList} from "react-native";

import {

} from "./styles";

export default function MarcarConsulta ({ route, navigation }){
  const [listaEspecialistas, setListaEspecialistas] = useState([]); 

  function handleButon(destino) {
    navigation.navigate(destino)
  }


  useEffect(() => {
    console.log(route)
  }, [])

  return(
  <View>
      <FlatList 
          data={listaEspecialistas}
          keyExtractor={item => item.sintomaId}
          renderItem={({item}) => <Item item={item} isAdicionar={true} />}
        />
  </View>
  )
}