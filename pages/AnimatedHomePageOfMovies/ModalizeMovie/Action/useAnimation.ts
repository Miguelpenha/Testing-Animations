import { AnimateProps, FadeInDown, withTiming, withSequence } from 'react-native-reanimated'
import { TouchableOpacityProps } from 'react-native'
import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated'

function useAnimation(index: number, onPress: () => void): AnimateProps<TouchableOpacityProps> {
    const scale = useSharedValue(1)
    const entering = FadeInDown.delay(800+(index*150)).duration(600)

    const animation = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }))

    return {
        entering,
        style: animation,
        activeOpacity: 0.5,
        onPressIn() {
            scale.value = withTiming(0.85)
        },
        onPressOut() {
            scale.value = withTiming(1)
        },
        onPress() {
            scale.value = withSequence(
                withTiming(0.85, {
                    duration: 200
                }),
                withTiming(1, {
                    duration: 200
                })
            )

            setTimeout(onPress, 300)
        }
    }
}

export default useAnimation