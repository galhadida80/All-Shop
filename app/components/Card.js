import React from 'react';
import { View, StyleSheet, Image} from 'react-native';

import AppText from '../components/AppText'
import colors from '../config/color'

export default function Card({title,image,subTitle}) {
    return (
        <View style={styles.card}>
           <Image style={styles.image} source={image}/>
            <View style={styles.detailcontainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>  
            </View>
                
        </View>
    );
}
const styles = StyleSheet.create({
    card:{
        borderRadius: 15,
        backgroundColor:colors.white,
        marginBottom: 20,
        overflow:"hidden"
    },
    image: {
        width: "100%",
        height: 200,
        },
        detailcontainer:{
            padding: 20,
            
        },
        title:{
            marginBottom:5,
        },
        subTitle: {
            color: colors.primary,
            fontWeight: "bold"
            
            }
})

