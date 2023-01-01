import { TouchableOpacityProps } from 'react-native'
import { SharedValue, withTiming, withSequence } from 'react-native-reanimated'

function events(scale: SharedValue<number>, onPress: () => Promise<void>, onLongPress: () => Promise<void>): TouchableOpacityProps {
    return {
        onPressIn() {
            scale.value = withTiming(0.9)
        },
        onPressOut() {
            scale.value = withTiming(1)
        },
        onPress() {
            scale.value = withSequence(
                withTiming(0.9, {
                    duration: 200
                }),
                withTiming(1, {
                    duration: 200
                })
            )

            setTimeout(onPress, 300)
        },
        async onLongPress() {
            scale.value = withTiming(1)

            await onLongPress()
        }
    }
}

export default events