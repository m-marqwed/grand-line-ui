import { Box, Button, Text, TextInput } from "@react-native-material/core";
import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Card } from 'react-native-paper';



//<Link to={{ screen: 'Exercise', params: { exercise: exercise} }}><Button>Add</Button></Link>
const ExerciseDetail = (props) => {
	
	const exercise = props.route.params.exercise
	const[weight,setWeight] = useState(0)
	const[repitions,setRepitions] = useState(0)
	const [excerciseSet,setExcerciseSet] = useState({})
	const navigation = useNavigation();
	
	const updateExcercise = useCallback(()=> {
		const excerciseSet = {
			exercise : exercise,
			weight: weight,
			repitions:repitions,
		}
		setExcerciseSet(excerciseSet)
		navigation.dispatch(
			CommonActions.navigate({
			  name: 'ExerciseViewer',
			  params: {
				excerciseSet: excerciseSet,
			  },
			})
		  );
	},[weight,repitions])
	console.log('excerciseSet',excerciseSet)

  return (
	<Card>

		<Card.Content>
			<Text variant="titleLarge">{exercise.name}</Text>
		</Card.Content>
		<Card.Cover source={{ uri: exercise.gifUrl }} />
		<Card.Actions>
			<Box position="relative" mb={72}>
				<TextInput 
				variant="standard" 
				type="text" 
				keyboardType='numeric'
				value={weight}
				placeholder="Weight"  
				style={{ height: 40, width:50,borderWidth: 1,}}
				onChangeText={newText => setWeight(newText)}

				/>

				<TextInput 
				variant="standard" 
				type="text" 
				keyboardType='numeric'
				value={repitions}
				placeholder="Repitions"  
				style={{ height: 40, width:50,borderWidth: 1,}}
				onChangeText={newText => setRepitions(newText)}

				/>
				<Button title="Save" onPress={updateExcercise} action></Button>


			</Box>

		</Card.Actions>
	</Card>
  )
}

ExerciseDetail.propTypes = {}

export default ExerciseDetail