import React from 'react';

import { NavigationContainer }
from '@react-navigation/native';

import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';

import LoginScreen
from './screens/LoginScreen';

import StudentListScreen
from './screens/StudentListScreen';

import HistoryScreen
from './screens/HistoryScreen';

const Stack =
createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Students"
          component={StudentListScreen}
        />

        <Stack.Screen
          name="History"
          component={HistoryScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}