import React from 'react'
import ExerciseListItem from './ExerciseListItem'

const ExerciseList = ({exerciseSet}) => {
  return (
    <ExerciseListItem exerciseSet={exerciseSet}>ExerciseList</ExerciseListItem>
  )
}

ExerciseList.propTypes = {}

export default ExerciseList