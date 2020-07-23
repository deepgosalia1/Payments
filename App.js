import React, { useEffect } from 'react';
import {
  SafeAreaView, Alert
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './src/screens/login/signup';
import { NavigationContainer } from '@react-navigation/native';
import Contacts from 'react-native-contacts';
import { PermissionsAndroid } from 'react-native';
import Login from './src/screens/login';
import PRecharge from './src/screens/SimRecharge';
import * as FileSystem from 'expo-file-system';
import DTHRech from './src/screens/otherRecharge/DTHrech';
import MetroRech from './src/screens/otherRecharge/MetroRech';
import CreditRech from './src/screens/otherRecharge/CreditRech';
import SmartCardRech from './src/screens/otherRecharge/metro/smartcard';


function LoginStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name={'SignInScreen'} component={Login} />
      <Stack.Screen name={'SignupScreen'} component={SignUp} />
    </Stack.Navigator>
  )
}

export default function App() {
  console.disableYellowBox = true;

  var fullcontacts = [];
  async function handleContact(item) {
    var fullname = item.givenName + " " + item.familyName
    item.phoneNumbers.map(i => {
      fullcontacts.push({ [fullname]: i.number });
    })
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.',
        'buttonPositive': 'Please accept bare mortal'
      }
    ).then(
      (err) => {
        if (err !== 'denied') {
          // console.log('idhar aaya')
          // fullcontacts.map((item) => {
          //   console.log('item value is ',item)
          //   FileSystem.writeAsStringAsync(FileSystem.cacheDirectory + 'payments/contacts.txt',item.valueOf(), FileSystem.EncodingType.UTF8)
          // })
        }
      }
    )

  }

  useEffect(() => {

    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.',
        'buttonPositive': 'Please accept bare mortal'
      }
    ).then(() => {

      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          'title': 'Contacts',
          'message': 'This app would like to view your contacts.',
          'buttonPositive': 'Please accept bare mortal'
        }
      )
    }).then(() => {
      // Contacts.getAll(async (err, contacts) => {
      //   if (err === 'denied') {
      //     Alert.alert('You need to mandatorily provide the permission')
      //   } else {
      //     console.log(contacts[300])
      //     contacts.map(handleContact)
      //     console.log('Yeh hai contacts ', fullcontacts)
      //   }
      // })
    })
  }, [])

  return (
    <NavigationContainer>
      <SafeAreaProvider style={{ flex: 1 }}>
        <LoginStack />
        {/* <PRecharge/> */}
        {/* <MetroRech/> */}
        {/* <SmartCardRech/> */}
        {/* <CreditRech/> */}
        {/* <PRecharge contacts={fullcontacts} /> */}
      </SafeAreaProvider>
    </NavigationContainer>

  )
}
