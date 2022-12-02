import { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated'

function animationTranslateY() {
    const translateY = useSharedValue(100)

    setTimeout(() => 
        translateY.value = withTiming(0, {
            duration: 600
        })
    , 700)

    return useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }]
    }), [])
}

export default animationTranslateY