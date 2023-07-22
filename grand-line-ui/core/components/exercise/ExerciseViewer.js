import React from 'react'
import ExerciseList from './ExerciseList'

const ExerciseViewer = props => {
  return (
    <ExerciseList exerciseSet={props.route.params.excerciseSet}></ExerciseList>
  )
}

ExerciseViewer.propTypes = {}

export default ExerciseViewer