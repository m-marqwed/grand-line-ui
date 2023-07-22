import { Box, HStack } from "@react-native-material/core";
import React, { useCallback, useState } from 'react';
import { Image, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';
import DefaultImage from '../../../assets/bodyparts/body-small.jpg';

const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri



const BodyPart = ({bodyparts, setBodyParts,  bodyPart}) => {
   
    const [checked, setChecked] = useState(false);
    
    const removeBodyPart = useCallback(
        (bodyParts) => {
            
            if (bodyParts.length === 0) {
                return
            }
            
            const bodyPartsWithoutCurrent = bodyParts.filter(function (part) {
                return part !== bodyPart;
            });
            return bodyPartsWithoutCurrent
        },[bodyparts,  bodyPart])
       

  return (
    <Box>
        <HStack>
            <Image style={{width: 100,height: 50}} source={{uri: DEFAULT_IMAGE}}></Image>
            <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    }}
            >
                {bodyPart}
            </Text>
            <Checkbox 

                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked)
                    let bodyPartsForCheckbox = []
                    if (!checked) {
                        bodyPartsForCheckbox = [].concat(bodyparts, bodyPart);
                        
                    }else {
                       bodyPartsForCheckbox =  removeBodyPart(bodyparts)
                    }
                    setBodyParts(bodyPartsForCheckbox)
                    
                    
                }} 
            />
            
        </HStack>
    </Box>
  )
}



export default BodyPart