
import { Button, HStack } from "@react-native-material/core";
import { Link } from '@react-navigation/native';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const ExerciseCard = props => {

  
  const [exercise] = useState({
    bodyPart: "chest",
    equipment: "barbell",
    gifUrl: "https://edb-4rme8.ondigitalocean.app/image/kfqBpVRtXhugrx",
    id: "0025",
    name: "barbell bench press",
    target: "pectorals"
  })
  return (
    <View style={styles.container}>
		<Link to={{ screen: 'Exercise', params: { id: 'jane' } }}>
     		<Image
        		style={styles.image}
        		source={exercise.gifUrl}
        		transition={1000}
      		/>
       		<HStack m={4} spacing={6}>
       			<Button style={
					{ 
						ml: '21px',
					 	color: '#fff',
						background: '#FFA9A9',
					  	fontSize: '14px', 
						
						textTransform: 'capitalize' 
					}
				}
				title={exercise.bodyPart}>
        			
      			</Button>
      			<Button style={
					{
						 ml: '21px', 
						 color: '#fff', 
						 background: '#FCC757', 
						 fontSize: '14px', 
						 
						 textTransform: 'capitalize' 
					}
				}
				title={exercise.target}>
        			
      			</Button>
  			</HStack>
    	</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { width: 300, height: 200, resizeMode: 'contain' },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExerciseCard