import React from 'react';
import { View, Text } from 'react-native';
import SmartImage from '../customcore/Simage';
import FastImage from 'react-native-fast-image';
export default class HCI extends React.Component {
    state = {
        isLoading: true,
        source: this.props.uri,
        isHome: this.props.isHome ? true : false,
    };

    render() {
        return (
            <View
                style={{
                    width: 150,
                    height: 120,
                    backgroundColor: '<anything>',
                    alignSelf: 'center',
                    marginTop: 5,
                    borderRadius: 5,
                    flexDirection: 'column',
                    marginLeft: 10,
                }}>
                <SmartImage
                    style={
                        this.state.isHome
                            ? {
                                width: 150,
                                alignSelf: 'center',
                                justifyContent: 'center',
                                borderRadius: 8,
                                height: 105,
                            }
                            : this.props.style
                    }
                    source={this.props.uri}
                    priorityValue={FastImage.priority.high}
                    cacheControl={FastImage.cacheControl.immutable}
                />

                <Text
                    numberOfLines={1}
                    ellipsizeMode={'tail'}
                    style={
                        this.state.isHome
                            ? {
                                // position: 'absolute',
                                textAlign: 'left',
                                color: 'white',
                                fontSize: 12,
                                alignSelf: 'baseline',
                                marginTop: 110,
                                // fontWeight:'bold'
                            }
                            : this.props.textStyle
                    }>
                    {this.props.textTitle}
                </Text>
            </View>
        );
    }
}
