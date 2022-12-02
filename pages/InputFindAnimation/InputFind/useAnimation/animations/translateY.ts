import { useAnimatedStyle, withDelay, withSequence, withTiming } from 'react-native-reanimated'

function animationTranslateY() {
    return useAnimatedStyle(() => ({
        transform: [{ translateY: withDelay(200, withSequence(withTiming(100), withTiming(0, {
            duration: 600
        }))) }]
    }), [])
}

export default animationTranslateY