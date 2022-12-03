import { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated'

function animationOpacity() {
    const opacity = useSharedValue(0.5)

    setTimeout(() => opacity.value = withTiming(1), 400)

    return useAnimatedStyle(() => ({
        opacity: opacity.value,
    }), [])
}

export default animationOpacity