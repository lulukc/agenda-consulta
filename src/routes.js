import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from "./pages/Login";
import Principal from "./pages/Principal";
import Simtomas from "./pages/Simtomas";
import Consultas from "./pages/Consultas";
import MarcarConsulta from "./pages/MarcarConsulta";


const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#0000FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{
            title: 'Principal',
            headerStyle: {
              backgroundColor: '#0000FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Simtomas"
          component={Simtomas}
          options={{
            title: 'Simtomas',
            headerStyle: {
              backgroundColor: '#0000FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Consultas"
          component={Consultas}
          options={{
            title: 'Consultas',
            headerStyle: {
              backgroundColor: '#0000FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="MarcarConsulta"
          component={MarcarConsulta}
          options={{
            title: 'Marcar Consulta',
            headerStyle: {
              backgroundColor: '#0000FF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;