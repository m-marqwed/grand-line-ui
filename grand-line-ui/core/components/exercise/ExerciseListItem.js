import { ListItem } from "@react-native-material/core";
import React from 'react';

const ExerciseListItem = ({exerciseSet}) => {
  const message = `Weight: ${exerciseSet.weight} Reps: ${exerciseSet.repitions}`
  return (
    <>
    <ListItem
      title={exerciseSet.exercise.name}
      secondaryText={message}
    />
   
  </>
  )
}

ExerciseListItem.propTypes = {}

export default ExerciseListItem