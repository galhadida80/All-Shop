import React from 'react';
import { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/Button';
import Screen from '../components/Screen';

function LoginScrren(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <Screen style={styles.container}>
            <Image 
            style={styles.logo}
            source={require("../assets/icon.png")}/>

            {/* email text input */}
            <AppTextInput 
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            onChangeText={text => setEmail(text)}
            keyboardType="default"
            placeholder="Email"
            textContentType="emailAddress"
            />

            {/* password text input */}
            <AppTextInput 
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            onChangeText={text => setPassword(text)}

            secureTextEntry={true}
            textContentType="password"
            /> 
            <AppButton title="Login" onPress={() => console.log(email,password)}/>

        </Screen>
    );
}

export default LoginScrren;

const styles = StyleSheet.create({
    container: {
        padding: 10
        },
    logo:{
        width: 80,
        height: 80,
        alignSelf:'center',
        marginTop: 50,
        marginBottom: 20
    }
    
})