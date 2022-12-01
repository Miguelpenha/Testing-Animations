import { IPadding } from '../../type'
import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import events from './events'

function useAnimation(padding: IPadding) {
    const containerPressed = useSharedValue(1)
    const containerPadding = useSharedValue(0)

    const containerAnimation = useAnimatedStyle(() => {
        if (padding === 'big') {
            containerPadding.value = withTiming(14)
        } else if (padding === 'medium') {
            containerPadding.value = withTiming(10)
        } else if (padding === 'small') {
            containerPadding.value = withTiming(6)
        }

        return ({
            paddingLeft: `${containerPadding.value}%`,
            paddingRight: `${containerPadding.value}%`,
            transform: [{ scale: containerPressed.value }]
        })
    }, [padding])

    return {
        containerAnimation,
        events: (onPress: () => void) => events(padding, containerPressed, onPress)
    }
}

export default useAnimation