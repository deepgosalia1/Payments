import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Surface } from 'react-native-paper';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Overlay } from 'react-native-elements';
import SmartCardRech from './metro/smartcard';

export default function MetroRech(props) {
    const [smartcardoverlay, setSCROverlay] = useState(false);
    const [cityname, setCity] = useState();

    return (
            <View style={{ height: '100%', width: '100%' }}>
                <Overlay isVisible={smartcardoverlay}>
                    <SmartCardRech cityname={cityname?cityname:'Mumbai'} onBackPress={()=>{setSCROverlay(false); setCity(prev=>null)}}/>
                </Overlay>

                <Text style={{ fontSize: 22, paddingStart: 15, fontFamily: 'serif', marginVertical:15}}> Choose Your Metro Region </Text>
                
                <View style={{ flexDirection: 'column', }}>
                    
                    <Surface style={{ margin: 10, height: 90, width: '90%', alignSelf: 'center', elevation: 5, borderRadius:5}}>
                        <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: 'row', height: '100%', width: '100%' }} onPress={()=>{setCity(prev=>'Delhi'); setSCROverlay(true)}}>
                            <Image style={{ height: 73, width: 73, alignSelf: 'center', justifyContent: 'center' }} source={require('../../assets/airtel.png')} />
                            <Text style={{ paddingLeft: 10, alignSelf: 'center', fontSize: 18 }}> Delhi Metro </Text>
                            <View style={{ flex: 1, alignItems:'flex-end', alignSelf:'center'}}>
                                <Entypo
                                    style={{marginRight:10 }}
                                    name="chevron-right"
                                    size={24}
                                    color="black"
                                />
                            </View>
                        </TouchableOpacity>
                    </Surface>
                    
                    <Surface style={{ margin: 10, height: 90, width: '90%', alignSelf: 'center', elevation: 5, borderRadius:5}} >
                        <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: 'row', height: '100%', width: '100%' }} onPress={()=>{setCity(prev=>'Mumbai'); setSCROverlay(true)}}>
                            <Image style={{ height: 73, width: 73, alignSelf: 'center', justifyContent: 'center' }} source={require('../../assets/airtel.png')} />
                            <Text style={{ paddingLeft: 10, alignSelf: 'center', fontSize: 18 }}> Mumbai Metro </Text>
                            <View style={{ flex: 1, alignItems:'flex-end', alignSelf:'center'}}>
                                <Entypo
                                    style={{marginRight:10 }}
                                    name="chevron-right"
                                    size={24}
                                    color="black"
                                />
                            </View>
                        </TouchableOpacity>
                    </Surface>
                    
                    <Surface style={{ margin: 10, height: 90, width: '90%', alignSelf: 'center', elevation: 5, borderRadius:5}}>
                        <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: 'row', height: '100%', width: '100%' }} onPress={()=>{setCity(prev=>'Hyderabad'); setSCROverlay(true)}}>
                            <Image style={{ height: 73, width: 73, alignSelf: 'center', justifyContent: 'center' }} source={require('../../assets/airtel.png')} />
                            <Text style={{ paddingLeft: 10, alignSelf: 'center', fontSize: 18 }}> Hyderabad Metro </Text>
                            <View style={{ flex: 1, alignItems:'flex-end', alignSelf:'center'}}>
                                <Entypo
                                    style={{marginRight:10 }}
                                    name="chevron-right"
                                    size={24}
                                    color="black"
                                />
                            </View>
                        </TouchableOpacity>
                    </Surface>

                </View>

            </View>
    )
}