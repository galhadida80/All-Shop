import React from 'react';
import { View ,StyleSheet,  TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

function CatogeryPickerItem({onPress,item}) {
    return <TouchableOpacity style={styles.container} onPress={onPress}>
    <View >
        <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
        <AppText style={styles.label}>{item.label}</AppText>
    </View>
    </TouchableOpacity>;
}

export default CatogeryPickerItem;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:30,
        paddingVertical:15,
        alignItems:"center",
        width:"33%"
    
    },
    label:{
        marginTop:5,
        textAlign:"center",
    },
    icon:{
        

    }
});
