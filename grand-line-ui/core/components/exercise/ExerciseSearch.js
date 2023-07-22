import { Box, Button, Text, TextInput, VStack } from "@react-native-material/core";
import React, { useState } from 'react';
import exercises from "../../../utils/exercises";
import ExerciseGrid from './ExerciseGrid';

const ExerciseSearch = (props) => {
 
    const [search, setSearch] = useState('');
    const [exercisesState, setExercises] = useState([]);
    
    const handleSearch = () => {
        
        if (search) {
          //const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
          
          const searchedExercises = exercises.filter(
            (item) => item.name.toLowerCase().includes(search.trim().toLowerCase())
                   || item.target.toLowerCase().includes(search.trim().toLowerCase())
                   || item.equipment.toLowerCase().includes(search.trim().toLowerCase())
                   || item.bodyPart.toLowerCase().includes(search.trim().toLowerCase()),
          );
    
          
          
          
          setExercises(searchedExercises);
        }
      };
      console.log('exercises',exercisesState)

  return (
    <VStack center={true}  style={{flex: 1}}>
      
        <Text variant="h5" style={{ margin: 16 }}>
            Find Exercises to Add
        </Text>
        <Box position="relative" mb={72}>
            <TextInput 
            variant="standard" 
            type="text" 
            value={search}
            placeholder="Search Exercises"  
            style={{ height: 40, width:250,borderWidth: 1,}}
            onChangeText={newText => setSearch(newText)}
            
            />
            <Button title="Search" onPress={handleSearch}></Button>
            
            
        </Box>
        <ExerciseGrid dataSource={exercisesState}></ExerciseGrid>
    </VStack>
  )
}



export default ExerciseSearch