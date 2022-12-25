import { AnimateProps, useSharedValue, FadeInDown, useAnimatedStyle} from 'react-native-reanimated'
import { TouchableOpacityProps } from 'react-native'
import events from './events'

function animation(index: number): AnimateProps<TouchableOpacityProps> {
    const scale = useSharedValue(1)

    const animationScale = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }))

    return {
        ...events(scale),
        style: animationScale,
        entering: FadeInDown.delay(200+(index*80)).duration(450)
    }
}

export default animation