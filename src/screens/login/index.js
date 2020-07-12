import config from '../../../config';
import DrawerScreen from '../DrawerScreens';
import { View, ActivityIndicator, SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'galio-framework';
import { Surface } from 'react-native-paper';
import { Divider } from 'react-native-elements';
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
GoogleSignin.configure({
    webClientId: config.webClientId,
    offlineAccess: false,
});

export default function Login({ navigation }) {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [inputField, setinput] = useState({ email: '', pass: '' });
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

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

    const loginUser = () => {
        auth()
            .signInWithEmailAndPassword(inputField.email, inputField.pass)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) { setInitializing(false); }
    }

    async function onGoogleButtonPress() {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        return auth().signInWithCredential(googleCredential).then(() => {
            const user = auth().currentUser;
            console.log('Welcome, ' + user.displayName)
        });
    }

    if (initializing && !user) { return <ActivityIndicator size={'large'} />; }

    if (!user) {
        return (
            // forceInset={{ top: 'always' }} use only if needed.
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Surface style={{ elevation: 5, backgroundColor: '#0080ff', height: 200, width: '100%', flexDirection: 'column', alignSelf: 'center', justifyContent: 'center' }}>
                    <Text center h3 color="white" size={45}> Welcome </Text>
                    <Text h3 center color="white"> to </Text>
                    <Text h2 center bold color="white"> Payments </Text>
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
                        onPress={() => loginUser(inputField)}
                    >
                        <Text bold color="white">Login </Text>
                    </Button>

                </Surface>
                <Divider style={{ height: 1, marginTop: 15, width: '88%', alignSelf: 'center' }} />
                <Button radius={15} round size="small" style={{ width: 100, marginTop: 15, alignSelf: 'center' }} color="green"
                    onPress={() => { navigation.navigate('SignupScreen') }}><Text> Sign Up </Text></Button>
                <View>
                    <GoogleSigninButton
                        style={{ borderRadius: 3, marginTop: 15, alignSelf: 'center', height: 50, width: 150 }}
                        color={GoogleSigninButton.Color.Dark} size={GoogleSigninButton.Size.Standard}
                        onPress={() => onGoogleButtonPress()} />
                </View>
            </SafeAreaView>
        )
    }

    return (
        <DrawerScreen />
    )
}