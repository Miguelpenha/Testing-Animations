import { AnimateProps, useSharedValue, FadeInDown, useAnimatedStyle} from 'react-native-reanimated'
import { TouchableOpacityProps } from 'react-native'
import events from './events'

function useAnimation(index: number, onPress: () => Promise<any>, onLongPress: () => Promise<void>): AnimateProps<TouchableOpacityProps> {
    const scale = useSharedValue(1)

    const animationScale = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }]
    }))

    return {
        style: animationScale,
        ...events(scale, onPress, onLongPress),
        entering: FadeInDown.delay(200+(index*80)).duration(450)
    }
}

export default useAnimation