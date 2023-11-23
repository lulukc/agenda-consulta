import React, { useState } from 'react';

import {
  PrincipalView,
  BoasVndas,
  ImangemRotas,
  ImangemLogo,
  LoginView,
  SubmitButton,
  SubmitButtonText,
  FormInput,
  Instrucoes
} from "./styles";

// 



export default function Login ({ navigation }){

  // const dispatch = useDispatch();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit() {
    console.log(`usuario: ${usuario} senha: ${senha}`)
    navigation.navigate("Principal")
  }


 return(
  <PrincipalView>
    <LoginView>
      <BoasVndas>Bem vindo!</BoasVndas>
      <Instrucoes>Insira o usuário e a senha para continuar:</Instrucoes>
      <FormInput
          placeholder="Usuário"
          returnKeyType="send"
          value={usuario}
          onChangeText={setUsuario}
        />
      <FormInput
          placeholder="Senha"
          returnKeyType="send"
          value={senha}
          onChangeText={setSenha}
        />

        <SubmitButton onPress={handleSubmit}>
          <SubmitButtonText>Entrar no sistema</SubmitButtonText>
        </SubmitButton>
    </LoginView>
    
  </PrincipalView>
  )
}