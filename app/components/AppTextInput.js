import React from 'react';
import { View ,StyleSheet} from 'react-native';

import { MaterialCommunityIcons} from '@expo/vector-icons'; 
import { TextInput } from 'react-native-gesture-handler';
import colors from '../config/color';

function AppTextInput({icon,...otherProps}) {
    return (
        <View style={styles.container}>
        {icon &&<MaterialCommunityIcons name={icon} size={20} color={colors.meduim} style={styles.icon}/>}
        <TextInput style={styles.textInput} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10
        } ,
        icon: {
            marginRight : 10,
            marginTop : 3
        },
        textInput: {
            fontSize: 18,
            
            }
    })

export default AppTextInput;