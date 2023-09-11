import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
import events from './events'

function useAnimation() {
    const border = useSharedValue(25)

    return {
        events: () => events(border),
        inputAnimation: [
            useAnimatedStyle(() => ({
                borderRadius: border.value
            }), [])
        ]
    }
}

export default useAnimation