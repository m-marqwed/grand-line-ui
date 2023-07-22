import React, { useState } from 'react';
import { FlatList } from "react-native";
import loadedBodyParts from "../../../utils/bodyparts";
import BodyPart from './BodyPart';

const BodyParts = props => {


  const [bodyPartsAdded,setBodyParts] =  useState([])
  return (
    <FlatList  data={loadedBodyParts} 
                renderItem={
                    ({item}) => <BodyPart
                    bodyparts={bodyPartsAdded}
                     setBodyParts={setBodyParts}
                     bodyPart={item}
                   />
                }
            >
                
    </FlatList>
    
  )
}



export default BodyParts