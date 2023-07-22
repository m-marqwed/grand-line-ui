import { Box, Button, Stack, Text, TextInput } from "@react-native-material/core";
import React, { useState } from 'react';
import { FlatList } from "react-native";
import exercises from "../utils/exercises";
import ExCard from "./ExCard";
const SearchExercise = (props) => {
 
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
    <Stack center={true} mt={37} p={20} style={{flex: 1}}>
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
            <FlatList  data={exercisesState} 
                renderItem={
                    ({item}) => <ExCard exercise={item} />
                }
            >
                
            </FlatList>
        </Box>
    </Stack>
  )
}



export default SearchExercise