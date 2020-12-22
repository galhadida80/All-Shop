import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView, Button , Alert , Dimensions , } from 'react-native';
import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/Button';
import AppText from './app/components/AppText';

import Card from './app/components/Card'
import ListDetailScreen from './app/screens/ListDetailScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {
  return <MessagesScreen/>
  
  }

 