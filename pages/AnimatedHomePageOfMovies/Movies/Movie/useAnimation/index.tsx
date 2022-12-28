import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
import animationContainer from './animationContainer'

function useAnimation(index: number, onPress: () => void, onLongPress: () => void) {
    const scaleThumbnail = useSharedValue(1)
    const scaleData = useSharedValue(1)

    const animationThumbnail = useAnimatedStyle(() => ({
        transform: [{ scale: scaleThumbnail.value }]
    }))

    const animationData = useAnimatedStyle(() => ({
        transform: [{ scale: scaleData.value }]
    }))

    return {
        animationData,
        animationThumbnail,
        animationContainer: () => animationContainer(index, scaleThumbnail, scaleData, onPress, onLongPress)
    }
}

export default useAnimation