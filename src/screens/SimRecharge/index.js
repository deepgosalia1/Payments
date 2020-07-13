import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import { Input, ButtonGroup } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
// import Contacts from 'react-native-unified-contacts'
import Contacts from 'react-native-contacts';
import { PermissionsAndroid } from 'react-native';

export default function PRecharge(props, { navigation }) {
    const [selectedIndex, setIndex] = useState(0);
    return (
        <View style={{ flex: 1, padding: 10 }}>
            <ButtonGroup buttons={['Prepaid', 'Postpaid']}
                selectedButtonStyle={{ backgroundColor: '#3399ff' }}
                selectedIndex={selectedIndex}
                onPress={(selectedIndex) => setIndex(prev => selectedIndex)}
                containerStyle={{ height: 30, elevation: 5 }} />
            <Input
                keyboardType={'number-pad'}
                containerStyle={{ marginTop: 15, height: 70, width: Dimensions.get('screen').width - 25, }}
                inputContainerStyle={{ height: 60, marginBottom: 0, }}
                inputStyle={{ color: 'black', fontSize: 20, fontWeight: '800', marginBottom: -20 }}
                placeholder={'Enter Mobile Number'}
                placeholderTextColor={'#4F8EC9'}
                rightIcon={
                    <TouchableOpacity onPress={() => {
                        PermissionsAndroid.request(
                            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                            {
                              'title': 'Contacts',
                              'message': 'This app would like to view your contacts.',
                              'buttonPositive': 'Please accept bare mortal'
                            }
                          ).then(() => {
                            Contacts.getAll((err, contacts) => {
                              if (err === 'denied'){
                                console.log(err)
                              } else {

                              }
                            })
                          })
                    }}>
                        <AntDesign name="contacts" size={30} color="black" />
                    </TouchableOpacity>
                }
                rightIconContainerStyle={{ marginBottom: -10 }}
            />
        </View>
    )
}