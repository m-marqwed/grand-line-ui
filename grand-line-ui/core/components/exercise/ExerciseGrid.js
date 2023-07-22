import React from 'react';
import { FlatList, View } from 'react-native';
import exercises from "../../../utils/exercises";
import ExerciseCard from './ExerciseCard';
const ExerciseGrid = (props) => {
	const dataSource = exercises
  
  return (
    <FlatList
    	data={dataSource} 
		renderItem={
			({ item }) => (
				<View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
					<ExerciseCard
						exercise={item}
					/>
				</View>	
			

			
			)
		}
		numColumns={3}
		keyExtractor={(item) => item.id}
    >
      
    </FlatList>
  )
}

ExerciseGrid.propTypes = {}

export default ExerciseGrid