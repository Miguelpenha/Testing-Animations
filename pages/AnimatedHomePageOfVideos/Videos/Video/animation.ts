import Animated, { useSharedValue, useAnimatedStyle, FadeInUp, withTiming, withSequence } from 'react-native-reanimated'
import { TouchableOpacityProps } from 'react-native'

function animation(index: number): Animated.AnimateProps<TouchableOpacityProps> {
    const scale = useSharedValue(1)

    const animationContainer = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }))

    return {
        activeOpacity: 0.5,
        style: animationContainer,
        entering: FadeInUp.delay(200+(index*100)).duration(800),
        onPressIn() {
            scale.value = withTiming(0.9)
        },
        onPressOut() {
            scale.value = withTiming(1)
        },
        onPress() {
            scale.value = withSequence(
                withTiming(0.9, {
                    duration: 180
                }),
                withTiming(1, {
                    duration: 180
                })
            )
        }
    }
}

export default animation