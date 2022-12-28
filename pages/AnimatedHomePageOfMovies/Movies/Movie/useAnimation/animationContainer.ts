import Animated, { SharedValue, useSharedValue, useAnimatedStyle, FadeInUp, withTiming, withSequence } from 'react-native-reanimated'
import { TouchableOpacityProps } from 'react-native'

function animationContainer(index: number, scaleThumbnail: SharedValue<number>, scaleData: SharedValue<number>, onPress: () => void, onLongPress: () => void): Animated.AnimateProps<TouchableOpacityProps> {
    const scaleContainer = useSharedValue(1)

    const animation = useAnimatedStyle(() => ({
        transform: [{ scale: scaleContainer.value }]
    }))

    return {
        onLongPress() {
            scaleContainer.value = withTiming(1)

            scaleThumbnail.value = withTiming(1, {
                duration: 600
            })
            
            scaleData.value = withTiming(1, {
                duration: 600
            })

            onLongPress()
        },
        style: animation,
        activeOpacity: 0.5,
        entering: FadeInUp.delay(200+(index*100)).duration(800),
        onPressIn() {
            scaleContainer.value = withTiming(0.9)

            scaleThumbnail.value = withTiming(0.95, {
                duration: 600
            })
            
            scaleData.value = withTiming(0.95, {
                duration: 600
            })
        },
        onPressOut() {
            scaleContainer.value = withTiming(1)

            scaleThumbnail.value = withTiming(1, {
                duration: 600
            })
            
            scaleData.value = withTiming(1, {
                duration: 600
            })
        },
        onPress() {
            scaleContainer.value = withSequence(
                withTiming(0.9, {
                    duration: 180
                }),
                withTiming(1, {
                    duration: 180
                })
            )

            scaleThumbnail.value = withSequence(
                withTiming(0.95, {
                    duration: 250
                }),
                withTiming(1, {
                    duration: 250
                })
            )

            scaleData.value = withSequence(
                withTiming(0.95, {
                    duration: 250
                }),
                withTiming(1, {
                    duration: 250
                })
            )

            onPress()
        }
    }
}

export default animationContainer