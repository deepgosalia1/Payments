import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Login from './src/screens/login';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './src/screens/login/signup';
import { NavigationContainer } from '@react-navigation/native';


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

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <LoginStack />
      </SafeAreaView>
    </NavigationContainer>

  )
}
