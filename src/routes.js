import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#FFF',
        }}
      >
        <Stack.Screen name="Usuários" component={Main} />
        <Stack.Screen
          name="User"
          component={User}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
