import React, { useState } from 'react';
import { View } from "react-native";
import loadedBodyParts from "../../../utils/bodyparts";
import BodyPart from './BodyPart';

const BodyParts = props => {


  const [bodyPartsAdded,setBodyParts] =  useState([])
  return (
    <View>
		{
          loadedBodyParts.map( 
            (item)  => (
              <BodyPart
                        bodyparts={bodyPartsAdded}
                        setBodyParts={setBodyParts}
                        bodyPart={item}
                      />
              )
            )
        } 
                
    </View>
    
  )
}



export default BodyParts