import React from 'react';
import { Image } from 'react-native';
import shorthash from 'shorthash';
import * as FileSystem from 'expo-file-system';

export default class CImage extends React.Component {
    state = {
        isLoading: true,
        source: require('../assets/defaultlogo.png'),
    };

    componentDidMount = async () => {
        const { uri } = this.props;
        const name = shorthash.unique(uri);
        const path = `${FileSystem.cacheDirectory}${name}`;
        const image = await FileSystem.getInfoAsync(path);
        if (image.exists) {
            console.log('read image from cache');
            this.setState({
                source: {
                    uri: image.uri,
                },
            });
            return;
        }

        console.log('downloading image to cache');
        const newImage = await FileSystem.downloadAsync(uri, path);
        this.setState({
            source: {
                uri: newImage.uri,
            },
        });
    };

    render() {
        return <Image style={this.props.style} source={this.state.source} defaultSource={require('../assets/flight.png')} />;
    }
}
