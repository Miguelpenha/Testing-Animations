import { AnimateProps } from 'react-native-reanimated'
import { TouchableOpacityProps } from 'react-native'
import { useSharedValue, useAnimatedStyle, FadeInDown } from 'react-native-reanimated'
import events from './events'

function useAnimation(index: number, onPress: () => void): AnimateProps<TouchableOpacityProps> {
    const scale = useSharedValue(1)

    const animationScale = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }))

    return {
        style: animationScale,
        ...events(scale, onPress),
        entering: FadeInDown.delay(200+(index*50)).duration(500)
    }
}

export default useAnimation