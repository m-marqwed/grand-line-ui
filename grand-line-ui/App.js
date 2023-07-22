import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import Exercise from './components/Exercise';
import ExerciseAccordian from './core/components/exercise/ExerciseAccordian';

import React from 'react';

const Stack = createNativeStackNavigator();
export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
     
      
        <Stack.Screen name="ExerciseAccordian" component={ExerciseAccordian} />
       
        <Stack.Screen name="Exercise" component={Exercise} />
      </Stack.Navigator>
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
