import React from 'react';
import { View } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import { Button } from '@ant-design/react-native';

export default function MainPay() {
    function RPCurrency(rupees) {
        return rupees * 100;
    }
    var options = {
        description: 'Credits towards consultation',
        image: 'https://i.imgur.com/3g7nmJC.png',
        currency: 'INR',
        key: 'rzp_test_CJSjU3DvALQzvC',
        amount: '100',
        name: 'foo',
        prefill: {
            email: 'void@razorpay.com',
            contact: '9191919191',
            name: 'Razorpay Software'
        },
        theme: { color: '#F37254' }
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'grey' }}>
            <Button
                style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 50 }}
                onPress={() => {
                    RazorpayCheckout.open(options).then((data) => {
                        // handle success
                        console.log(`Success: ${data.razorpay_payment_id}`);
                    }).catch((error) => {
                        // handle failure
                        console.log(`Error: ${error.code} | ${error.description}`);
                    });

                }}
            > Click me Daddy </Button>
        </View>
    )
}