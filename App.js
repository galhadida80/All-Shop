import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View ,SafeAreaView, Button , Alert , Dimensions, Switch, } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/Button';
import AppText from './app/components/AppText';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';

import Card from './app/components/Card'
import ListDetailScreen from './app/screens/ListDetailScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import { TextInput } from 'react-native-gesture-handler';
import AppTextInput from './app/components/AppTextInput';
import ListingsScreen from './app/screens/ListingsScreen';
import AppPicker from './app/components/AppPicker';
import LoginScrren from './app/screens/LoginScrren';

export default function App() {


    return( 
       <LoginScrren>

       </LoginScrren>
  );
    
 
  
  }

 