import React from 'react';
import { View ,StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import color from '../config/color'
function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <AntDesign name="delete" size={40} color="white" />

            </View>
        </TouchableWithoutFeedback>
    );
}




const styles = StyleSheet.create({
    container: {
    backgroundColor : color.danger,
    width: 80,
    borderRadius:5,
    justifyContent: "center", 
    alignItems: "center",
    
    }
})
export default ListItemDeleteAction;