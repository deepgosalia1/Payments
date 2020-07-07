import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import SCard from './src/customcore/SCard';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import DrawerScreen from './src/screens/DrawerScreens';
import {Avatar, Text, Image} from 'react-native-paper';

export default function App() {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
       <DrawerScreen />
    </NavigationContainer>
  )
}
