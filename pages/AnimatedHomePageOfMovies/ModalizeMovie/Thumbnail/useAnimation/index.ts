import { AnimateProps, useSharedValue, useAnimatedStyle, FadeInDown } from 'react-native-reanimated'
import { TouchableOpacityProps } from 'react-native'
import events from './events'

function useAnimation(onLongPress: () => void): AnimateProps<TouchableOpacityProps> {
    const scale = useSharedValue(1)

    const scaleAnimation = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }))

    return {
        style: scaleAnimation,
        ...events(scale, onLongPress),
        entering: FadeInDown.delay(200).duration(600),
    }
}

export default useAnimation