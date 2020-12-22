import React from 'react';
import { View ,StyleSheet,Image } from 'react-native';
import AppText from './AppText';

function ListItem({title, subtitle,image}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <View style={styles.containerdetails}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subtitle}</AppText>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },
    containerdetails:{
        flexDirection:"column"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10

},
    title: {
        color: "blue",
        fontWeight:"500",


        },
    subTitle: {
        color: "#6e6969",
        },
    
})
export default ListItem;