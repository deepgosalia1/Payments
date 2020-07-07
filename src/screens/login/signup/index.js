/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import {
    SafeAreaView,
} from 'react-native';
import { GoogleSignin } from '@react-native-community/google-signin';
import config from '../../../../config';
GoogleSignin.configure({
    webClientId: config.webClientId,
});
import auth from '@react-native-firebase/auth';
import { Text, Input, Button } from 'galio-framework';
import { Surface } from 'react-native-paper';
import { Divider } from 'react-native-elements';

export default function SignUp({ navigation }) {

    const [inputField, setinput] = useState({ email: '', pass: '' });
    const inputEmailHandler = (enteredText) => {
        if (enteredText.length != 0) {
            setinput({
                ...inputField,
                email: enteredText,
            });
        }
    };
    const inputPassHandler = (enteredText) => {
        if (enteredText.length != 0) {
            setinput({
                ...inputField,
                pass: enteredText,
            });
        }
    };
    const createUser = (inputField) => {
        auth()
            .createUserWithEmailAndPassword(inputField.email, inputField.pass)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') { console.log('That email address is invalid!'); }
                console.error(error);
            });
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Surface style={{ elevation: 5, backgroundColor: '#0080ff', height: 200, width: '100%', flexDirection: 'column', alignSelf: 'center', justifyContent: 'center' }}>
                <Text center h3 color="white" size={45}> Welcome </Text>
                <Text h3 center color="white"> to </Text>
                <Text h2 center bold color="white"> MStream ! </Text>
            </Surface>
            <Surface style={{ flexDirection: 'column', width: '85%', alignSelf: 'center', marginTop: 15 }}>
                <Input placeholder="Email ID" rounded
                    onChangeText={(val) => inputEmailHandler(val)}
                    value={inputField.email}
                />
                <Input placeholder="Password" rounded password
                    secureTextEntry={true}
                    onChangeText={(val) => inputPassHandler(val)}
                    value={inputField.pass}
                />
                <Button radius={15} round size="small" style={{ width: 100, marginTop: 15, alignSelf: 'center' }} color="green"
                    onPress={
                        () => {
                            createUser(inputField)
                            navigation.navigate('SignInScreen')
                        }} >
                    <Text bold color="white">Sign Up </Text>
                </Button>

            </Surface>
            <Divider style={{ height: 1, marginTop: 15, width: '88%', alignSelf: 'center' }} />

        </SafeAreaView>
    )
}