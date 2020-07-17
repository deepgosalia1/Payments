import React, { useEffect, useState } from 'react';
import { View, UIManager, Text } from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { Surface, Button } from 'react-native-paper';

export default function CreditRech(props) {
    const [billFetched, setBillFetch] = useState(false);
    useEffect(() => {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }, [])
    return (
        <View style={{ flex: 1, }}>
            <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 18, width: '90%', textAlign: 'center' }}> Enter Your Card Information Here </Text>

            <Surface style={{ marginTop: 100, height: 200, width: '90%', alignSelf: 'center', borderWidth: 0.2, borderRadius: 5, elevation: 10, justifyContent: 'center' }}>
                <View style={{ marginTop: -75, padding: 15 }}>
                    <CreditCardInput />
                </View>
            </Surface>

            <Button
                color={'darkblue'}
                mode={'contained'}
                style={{ elevation: 10, width: '90%', alignSelf: 'center', marginVertical: 15 }}
                onPress={()=>{}}
            > {billFetched ? 'Pay Bill' : 'Fetch Bill'}
            </Button>

        </View>
    )
}