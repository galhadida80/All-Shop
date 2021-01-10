import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet ,SafeAreaView, View} from 'react-native';

function Screen({children ,style}) {
    return (
        <SafeAreaView style={[style,styles.screen]}>
            <View style={style}>{children}</View>
            
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen:{
        paddingTop:50,
    
      
    },
})

export default Screen;