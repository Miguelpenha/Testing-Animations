import Animated, { useSharedValue, useAnimatedStyle, FadeInUp } from 'react-native-reanimated'
import { TouchableOpacityProps } from 'react-native'
import events from './events'

function useAnimation(index: number, onPress: () => void): Animated.AnimateProps<TouchableOpacityProps> {
    const scale = useSharedValue(1)
    const padding = useSharedValue(3)

    const animation = useAnimatedStyle(() => ({
        padding: `${padding.value}%`,
        transform: [{ scale: scale.value }]
    }))

    return {
        style: animation,
        activeOpacity: 0.5,
        ...events(scale, padding, onPress),
        entering: FadeInUp.delay(200+(index*100)).duration(800)
    }
}

export default useAnimation