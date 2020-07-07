import React, { useState } from "react";
import { Surface } from 'react-native-paper'
import CImage from './CImage';
import { Image, View, Text } from 'react-native'
export default function SCard(props) {

    var vehicles = {
        train: require('../assets/flight.png'),
        flight: require('../assets/flight.png'),
        bus: require('../assets/flight.png'),
        hotel: require('../assets/flight.png')
    }

    const toFetch = props.toFetch || false;
    return (
        <View style={{ margin: 10 }}>
            <Surface
                style={[{
                    elevation: 15,
                    height: 85,
                    width: 85,
                    borderRadius: 20,
                }, props.cardStyle]}
            >
                {toFetch &&
                    <CImage
                        uri={props.source}
                        style={[{ height: 85, width: 85, borderRadius: 20 }, props.imageStyle]}
                    />
                }
                {!toFetch &&
                    <Image
                        source={vehicles[props.type]}
                        style={[{ height: 85, width: 85, borderRadius: 20 }, props.imageStyle]}
                    />
                }
            </Surface>
            <Text numberOfLines={1} style={[{ textAlign: 'center', width: 85, marginTop: 5, fontSize: 15, fontWeight: 'bold' }, props.textStyle]}>
                {props.title}
            </Text>
        </View>
    )
}