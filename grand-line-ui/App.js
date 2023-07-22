import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import React from 'react';
import ExerciseAccordian from './core/components/exercise/ExerciseAccordian';
import ExerciseDetail from './core/components/exercise/ExerciseDetail';
import ExerciseViewer from './core/components/exercise/ExerciseViewer';
const Stack = createNativeStackNavigator();
export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
     
      
        <Stack.Screen name="ExerciseAccordian" component={ExerciseAccordian} />
       
        <Stack.Screen name="Exercise" component={ExerciseDetail} />
        <Stack.Screen name="ExerciseViewer" component={ExerciseViewer} />
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
