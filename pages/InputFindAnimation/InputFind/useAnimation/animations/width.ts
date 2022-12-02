import { useAnimatedStyle, withDelay, withSequence, withTiming } from 'react-native-reanimated'

function animationWidth() {
    return useAnimatedStyle(() => ({
        width: withDelay(500, withSequence(withTiming(60), withTiming(200, {
            duration: 500
        })))
    }), [])
}

export default animationWidth