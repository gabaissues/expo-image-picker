import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenInitial from './pages/initial'
import ScreenPublishD from './pages/publishD'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="initial" component={ScreenInitial} />
        <Stack.Screen options={{ headerShown: false }} name="publishD" component={ScreenPublishD} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
