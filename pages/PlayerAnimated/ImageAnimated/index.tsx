import { FC } from 'react'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Container, Image } from './style'

interface Iprops {
    id: string
    image: string
    itemSelect: string
    onPress: () => void
}

const ImageAnimated: FC<Iprops> = ({ itemSelect, id, image, onPress }) => {
    const pressedContainerImageScale = useSharedValue(0)
    const pressedContainerImageOpacity = useSharedValue(0)

    pressedContainerImageScale.value = withTiming(1)

    pressedContainerImageOpacity.value = withTiming(1)

    const animationContainerImage = useAnimatedStyle(() => ({
        opacity: pressedContainerImageOpacity.value,
        transform: [{ scale: pressedContainerImageScale.value }]
    }), [])

    return (
        <Container
            onPress={onPress}
            select={itemSelect === id}
            onPressIn={() => {
                pressedContainerImageScale.value = withTiming(0.9)
                pressedContainerImageOpacity.value = withTiming(0.8)
            }}
            onPressOut={() => {
                pressedContainerImageScale.value = withTiming(1)
                pressedContainerImageOpacity.value = withTiming(1)
            }}
            style={animationContainerImage}
        >
            <Image source={{ uri: image }}/>
        </Container>
    )
}

export default ImageAnimated