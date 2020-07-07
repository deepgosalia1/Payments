import React, { useState } from "react";
import { Surface } from 'react-native-paper'
import CImage from './CImage';
import { Image, View, Text, TouchableOpacity } from 'react-native'
export default function SCard(props) {

    var vehicles = {
        train: require('../assets/train.png'),
        flight: require('../assets/flight.png'),
        bus: require('../assets/bus.png'),
        hotel: require('../assets/hotel.png'),
        phonerecharge: require('../assets/phonerecharge.png'),
        otherrecharge: require('../assets/otherrecharge.png'),
        bills: require('../assets/bills.png')
    }

    const toFetch = props.toFetch || false;
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
            <View style={{ margin: 10, flex: 1, alignItems: 'center' }}>
                <Surface
                    style={[{
                        elevation: 5,
                        height: 70,
                        width: 70,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }, props.cardStyle]}
                >
                    {toFetch &&
                        <CImage
                            uri={props.source}
                            style={[{ height: 60, width: 60, borderRadius: 15, backgroundColor: 'white' }, props.imageStyle]}
                        />
                    }
                    {!toFetch &&
                        <Image
                            source={vehicles[props.type]}
                            style={[{ height: 60, width: 60, borderRadius: 15, backgroundColor: 'white' }, props.imageStyle]}
                        />
                    }
                </Surface>
                <Text numberOfLines={1} style={[{ textAlign: 'center', width: 100, marginTop: 5, fontSize: 12, fontWeight: 'bold' }, props.textStyle]}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}