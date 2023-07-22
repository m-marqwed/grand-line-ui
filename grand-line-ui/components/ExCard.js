import { Link } from '@react-navigation/native';
import React from 'react';
import { Button, Card, Text } from 'react-native-paper';



const ExCard = (props) => {
    const exercise = props.exercise
  
    return(
        
    <Card>
    
      <Card.Content>
        <Text variant="titleLarge">{exercise.name}</Text>
        <Text variant="bodyMedium">{exercise.target}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: exercise.gifUrl }} />
      <Card.Actions>
        
        <Link to={{ screen: 'Exercise', params: { exercise: exercise} }}><Button>Add</Button></Link>
      </Card.Actions>
    </Card>
    
    
    );
}   

export default ExCard;