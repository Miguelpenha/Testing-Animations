import { AnimateProps, useSharedValue, useAnimatedStyle, FadeInDown } from 'react-native-reanimated'
import { TouchableOpacityProps } from 'react-native'
import events from './events'

function useAnimation(index: number, onPress: () => Promise<void>, onLongPress: () => void): AnimateProps<TouchableOpacityProps> {
    const scale = useSharedValue(1)
    const padding = useSharedValue(3.5)

    const animation = useAnimatedStyle(() => ({
        padding: `${padding.value}%`,
        transform: [{ scale: scale.value }]
    }))

    return {
        style: animation,
        activeOpacity: 0.5,
        ...events(scale, padding, onPress, onLongPress),
        entering: FadeInDown.delay(200+(index*110)).duration(550),
    }
}

export default useAnimation