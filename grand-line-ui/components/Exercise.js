import React from 'react'
import { Text } from 'react-native'

const Exercise = props => {
  
  return (
    <Text>{props.route.params.exercise.name}</Text>
  )
}


export default Exercise