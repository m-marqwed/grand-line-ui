import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import ExerciseCard from './ExerciseCard';
const ExerciseGrid = ({dataSource}) => {
	//const dataSource = exercises
  
  return (
	<SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    	{
			dataSource.map( 
				(item)  => (
					<View style={{ flex: 1, flexDirection: 'column', width:200 }}>
						<ExerciseCard
							exercise={item}
						/>
					</View>
					)
				)
		} 
    </ScrollView >
	</SafeAreaView>
	
  )
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  
	},
	scrollView: {
	  backgroundColor: 'pink',
	  marginHorizontal: 20,
	  height: 4000 ,
	},
	text: {
	  fontSize: 42,
	},
  });
  

export default ExerciseGrid