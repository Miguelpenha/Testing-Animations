import { useAnimatedStyle, withDelay, withSequence, withTiming } from 'react-native-reanimated'

function animationOpacity() {
    return useAnimatedStyle(() => ({
        opacity: withDelay(200, withSequence(withTiming(0.5), withTiming(1))),
    }), [])
}

export default animationOpacity