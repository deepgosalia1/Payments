import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { Header } from 'react-native-elements';
import { TextInput, Button, Divider } from 'react-native-paper';
import Promocodes from '../../../assets/constants/promodata';
import { Ionicons } from '@expo/vector-icons';

export default function SmartCardRech(props) {
    return (
        <View style={{ flex: 1 }}>
            {/*  */}
            {/* <Header
                leftComponent={{ icon: 'arrow-back', color: 'black', onPress: props.onBackPress }}
                centerComponent={<Text numberOfLines={1} style={{ alignSelf: 'center', fontSize: 18 }}> {props.cityname} Metro SmartCard </Text>}
                containerStyle={{ backgroundColor: '#bbb', marginTop:-20}}
            /> */}
            <View style={{width:'90%'}}>
                <View style={{ flexDirection: 'row', height: 50, marginLeft:15}}>
                    <Ionicons name="md-arrow-round-back" size={28} color="black" style={{ alignSelf: 'center' }} onPress={props.onBackPress} />
                    <Text numberOfLines={1} style={{ alignSelf: 'center', fontSize: 18, textAlign: 'center', width: '100%' }}>{props.cityname} Metro SmartCard </Text>
                </View>
            </View>
            <TextInput
                mode={'outlined'}
                placeholder={'Number'}
                style={{ width: '90%', height: 50, alignSelf: 'center', marginVertical: 15 }}
                label={'Smart Card Number'}
            />

            <Button
                mode={'contained'}
                style={{ width: '70%', alignSelf: 'center', marginVertical: 15 }}
                onPress={() => { }}
            >
                Get Account Balance
            </Button>

            <View style={{ borderTopWidth: 0.3, borderBottomWidth: 0.3, marginTop: 15, width: Dimensions.get('screen').width, backgroundColor: 'lightgrey', height: 35, justifyContent: 'center', alignItems: 'flex-start', alignSelf: 'center' }}>
                <Text style={{ textAlignVertical: 'center', fontSize: 16, marginLeft: 10 }}> Offers for you! </Text>
            </View>

            <FlatList
                style={{ marginBottom: 0, marginTop: 25 }}
                data={Promocodes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{ height: 65, width: '100%', marginBottom: 0 }}>
                        <Text style={{ fontSize: 18, textAlignVertical: 'center' }}><Text style={{ fontSize: 18, fontStyle: 'italic' }}> {item.code} </Text>- {item.title} </Text>
                        <Text numberOfLines={2} style={{ fontSize: 14, textAlignVertical: 'center' }}>{item.description}</Text>
                        <Divider style={{ width: '100%', borderWidth: 0.2 }} />
                    </View>
                )}
            />

        </View>
    )
}