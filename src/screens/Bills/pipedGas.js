import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { Input, ButtonGroup, Overlay, ListItem, SearchBar } from 'react-native-elements';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Button, Divider, } from 'react-native-paper';
import GasProviders from '../../assets/constants/GasProvider'
import Promocodes from '../../assets/constants/promodata'

export default function PipedGas() {
    const [gasProvider, setProvider] = useState();
    const [overlayVisible, setOverlayVisible] = useState(false);

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <Overlay
                isVisible={overlayVisible}
                overlayStyle={{ width: '85%', height: '90%', flexDirection: 'column' }}
            >
                <SearchBar inputContainerStyle={{ backgroundColor: 'white', borderWidth: 0, height: 30 }} containerStyle={{ marginTop: 5, backgroundColor: 'darkblue', borderRadius: 5, borderWidth: 0, width: '95%', alignSelf: 'center' }} />
                <Text style={{ margin: 10, marginTop: 25, fontSize: 15, fontWeight: 'bold' }}> Available Provider are: </Text>
                <View style={{ alignSelf: 'center', height: '70%', width: '90%' }}>
                    <FlatList
                        style={{ marginVertical: 15 }}
                        keyExtractor={(item) => item.id}
                        data={GasProviders}
                        renderItem={({ item }) => (
                            <View>
                                <ListItem
                                    activeOpacity={0.99}
                                    onPress={() => {
                                        setProvider(prev => item.name);
                                        setOverlayVisible(false)
                                    }}
                                    containerStyle={{ height: 70, borderRadius: 10 }}
                                    title={item.name}
                                    leftAvatar={{ source: { uri: item.imageurl } }}
                                    chevron
                                />
                                <Divider style={{ borderWidth: 0.3 }} />
                            </View>
                        )}
                    />
                </View>
                <Button style={{ flex: 1, width: '30%', alignSelf: 'center', justifyContent: 'flex-end', marginBottom: 15 }} onPress={() => setOverlayVisible(false)}> Close </Button>
            </Overlay>

            <TouchableOpacity
                style={{ height: 50, width: '100%', alignSelf: 'center', marginTop: 20 }}
                onPress={() => setOverlayVisible(true)}>
                <Text style={{ fontSize: 18, }}> {gasProvider ? gasProvider : 'Choose Gas Provider'} </Text>
                <Divider style={{ marginTop: 10, borderWidth: 0.2 }} />
            </TouchableOpacity>
            
            {gasProvider && <Input
                containerStyle={{ marginTop: 10, padding: 0, margin: 0 }}
                label={'Bill / Account / Customer Number'}
                labelStyle={{ color: 'black', fontWeight: '500', padding: 0 }}
                placeholder={'Enter the Number here'}
            />
            }

            <Button mode={'contained'} color={'darkblue'} onPress={() => console.log('hua')}> Fetch Bill </Button>

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