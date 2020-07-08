import React from 'react'
import FastImage from 'react-native-fast-image'
import PLACE_HOLDER_DEFAULT from '../assets/defaultlogo.png';


class SImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageLoading: true
        }
    }

    imageLoadProgress = (e) => {
        this.setState({ imageLoading: false })
        this.props.onProgress && this.props.onProgress(e)
    }
    imageLoadError = () => {
        this.setState({ imageLoading: false })
        this.props.onError && this.props.onError()
    }

    imageLoad = (e) => {
        this.setState({ imageLoading: true })
        this.props.onLoad && this.props.onLoad(e)
    }

    render() {
        let { source } = this.props
        const { style, resizeMode } = this.props
        const { imageLoading } = this.state

        source = imageLoading ? source : (this.props.placeholder || PLACE_HOLDER_DEFAULT);

        return (
            <FastImage
                {...this.props}
                style={style}
                source={{ uri: source, cache: this.props.cacheControl, priority: this.props.priorityValue }}
                fallback={!this.state.imageLoading}
                onError={this.imageLoadError}
                onProgress={this.imageLoadProgress}
                onLoad={this.imageLoad}
            />
        )
    }
}

export default SImage;