import React from 'react';
import { Text ,View} from 'react-native';
import Screen from './Screen';
import { MaterialCommunityIcons} from '@expo/vector-icons'; 

import color from '../config/color';


function Icon({
    name,
    size = 40,
    backgroundColor = "#000",
    iconColor = "#fff"
    }) {
    return (
        <View style={{
        width: size,height: size,
        borderRadius: size / 2,backgroundColor,
        justifyContent:"center",alignItems:"center",
        borderRadius:15}}>
            <MaterialCommunityIcons name={name} color ={iconColor} size={size*0.5}/>
        </View>
    );


}

export default Icon;