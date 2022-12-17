import { IImage } from '../type'
import { FC } from 'react'
import { useAnimatedStyle, useSharedValue, withTiming, ZoomIn } from 'react-native-reanimated'
import { Container, Image } from './style'

interface Iprops {
    image: IImage
    onPress: () => void
    currentImage: string
}

const ImageAnimated: FC<Iprops> = ({ currentImage, image, onPress }) => {
    const pressedContainerImageScale = useSharedValue(1)
    const pressedContainerImageOpacity = useSharedValue(1)

    const animationContainerImage = useAnimatedStyle(() => ({
        opacity: pressedContainerImageOpacity.value,
        transform: [{ scale: pressedContainerImageScale.value }]
    }), [])
    
    return (
        <Container
            onPress={onPress}
            entering={ZoomIn.delay(200)}
            style={animationContainerImage}
            current={currentImage === image.id}
            onPressIn={() => {
                pressedContainerImageScale.value = withTiming(0.9)
                pressedContainerImageOpacity.value = withTiming(0.8)
            }}
            onPressOut={() => {
                pressedContainerImageScale.value = withTiming(1)
                pressedContainerImageOpacity.value = withTiming(1)
            }}
        >
            <Image source={{uri: image.url}}/>
        </Container>
    )
}

export default ImageAnimated