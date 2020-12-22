import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, Button , Alert } from 'react-native';

export default function App() {
  console.log(require("./assets/icon.png"));
  var gal =() =>{
    console.log('yes');
  }

  return (
    <SafeAreaView style={[styles.container1,styles.container2]} >
    <Button  color ="orange" title="click me" 
    onPress={()=>
      Alert.alert("My title","My message"
      ,[{ text: "Yes" ,onPress :() => {gal()}},{text: "No" }])
    }/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "green",
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
