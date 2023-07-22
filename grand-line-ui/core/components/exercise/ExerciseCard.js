import { Link } from '@react-navigation/native';
import React from 'react';
import { Button, Card, Text } from 'react-native-paper';



const ExerciseCard = (props) => {
    //const exercise = props.exercise
    const exercise = {
      bodyPart: "waist",
      equipment: "body weight",
      gifUrl: "https://edb-4rme8.ondigitalocean.app/image/KA1FtnWyBLH8SJ",
      id: "0001",
      name: "3/4 sit-up",
      target: "abs"
    }
    return(
        
    <Card>
    
      <Card.Content>
        <Text variant="titleLarge">{exercise.name}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: exercise.gifUrl }} />
      <Card.Actions>
        
        <Link to={{ screen: 'Exercise', params: { exercise: exercise} }}><Button>Add</Button></Link>
      </Card.Actions>
    </Card>
    
    
    );
}   

export default ExerciseCard;