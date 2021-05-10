import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UserList from './screens/UserList'
import CreateUser from './screens/CreateUser'
import UserDetail from './screens/UserDetail'


const Stack = createStackNavigator()


const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='UserList' component={UserList} options={{title: 'Lista de usuarios'}} />
      <Stack.Screen name='CreateUser' component={CreateUser} options={{title: 'Nuevo usuario'}} />
      <Stack.Screen name='UserDetail' component={UserDetail} options={{title: 'Detalles del usuario'}} />
      
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
