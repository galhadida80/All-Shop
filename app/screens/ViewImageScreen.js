import React from 'react';
import { Image , StyleSheet, View ,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import colors from '../config/color';

function ViewImageScreen(props) {

    return(
    <View style={styles.contianter}>

        <View style={styles.closeIcon}>
     
             <AntDesign name="close" size={40} color="white" />
        </View>
        <View style={styles.deleteIcon}>

        <AntDesign name="delete" size={24} color="white" />

        </View>

        <Image 
        resizeMode="contain" 
        style={styles.image} source={require("../assets/chair.jpg")}
        />
    </View>
    );
    }

    const styles = StyleSheet.create({
        closeIcon:{
            position: "absolute",
            top: 40,
            left: 30,

        },
        contianter:{
            backgroundColor: "black",
            flex: 1,
            justifyContent:"center"




        },
        deleteIcon:{
            position: "absolute",
            top: 40,
            right: 30,
        },
        image: {
            width: "100%",
            height: "100%",
            },
    })
    export default ViewImageScreen;