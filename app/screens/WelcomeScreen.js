import React from 'react';
import { ImageBackground ,StyleSheet, View , Button, Image,Text } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppButton from '../components/Button';

function WelcomeScreen(props) {
    return (
      <ImageBackground style={styles.background}
      blurRadius={10}
      source={require("../assets/back.jpg")}>

        <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require("../assets/icon.png")}/>
          <Text style={styles.tagline}>shopping</Text> 
          </View>
          
   
<View style={styles.buttonsContainer} >
<AppButton title="Login"  onPress={()=> console.log("login") } colorbutton="secondary"/>
    <AppButton title="Sign up"  onPress={()=> console.log("signup")}colorbutton="blue"/>
</View>

      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background : {
        flex :1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonsContainer: {
        padding: 20,
        width: "100%"
        },
    logo : {
        width :100,
        height:100,

        
    },
    logocontainer : {
        position : "absolute",
        top : 60,
        alignItems:"center"
        
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical : 2,
        },

})
export default WelcomeScreen;