import React from 'react';
import { View ,StyleSheet,Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText';
import color from '../config/color';
            //logic true & true

function ListItem({title, subTitle,image,IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions} >
        <TouchableHighlight
        underlayColor={color.light}
        onPress={onPress}
        >        
        <View style={styles.container}>
            {IconComponent}
            {image &&<Image style={styles.image} source={image}/>} 
            <View style={styles.containerdetails}>
                <AppText style={styles.title}>{title}</AppText>
               {subTitle &&<AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding : 15,
        backgroundColor: color.white
    },
    containerdetails:{
        flexDirection:"column",
        marginLeft:10,
        justifyContent: "center",

    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
},
    title: {
        color: "black",
        fontWeight:"500",
        fontWeight:"bold"


        },
    subTitle: {
        color: '#6e6969',
        },
    
})
export default ListItem;