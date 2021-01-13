import React from 'react';
import { StyleSheet } from 'react-native';

import * as Yup from 'yup';
import {
  AppForm,
  AppFormField,
  SubmitButton,
  
  } from "../components/forms";

import Screen from '../components/Screen';


const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
})

function RegisterScreen(props) {
    return (
      <Screen style={style.container}>

<AppForm
        
        initialValues={{
          name:"",
          email: "", 
          password: ""
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
            >
         <AppFormField
                        autoCapitalize="none" autoCorrect={false}
                        name="name" 
                        keyboardType="default" placeholder="Name" 
                        />
                        
         <AppFormField
                        autoCapitalize="none" autoCorrect={false}
                        name="email" 
                        keyboardType="default" placeholder="Email" textContentType="emailAddress"
                        />
          
          <AppFormField 
                        autoCapitalize="none" autoCorrect={false}
                        name="password" placeholder="Password"
                        secureTextEntry={true} 
                        /> 
          <SubmitButton title="Register"/>

          </AppForm>

      </Screen>
    );
}

export default RegisterScreen;

const style = StyleSheet.create({
  container: {
      padding: 10
      },
    })