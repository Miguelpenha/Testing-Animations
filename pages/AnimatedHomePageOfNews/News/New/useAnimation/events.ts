import { SharedValue, withTiming, withSequence } from 'react-native-reanimated'
import { TouchableOpacityProps } from 'react-native'

function events(scale: SharedValue<number>, padding: SharedValue<number>, onPress: () => Promise<void>, onLongPress: () => void): TouchableOpacityProps {
    return {
        onPressIn() {
            scale.value = withTiming(0.95)

            padding.value = withTiming(5, {
                duration: 600
            })
        },
        onPressOut() {
            scale.value = withTiming(1)

            padding.value = withTiming(3.5, {
                duration: 600
            })
        },
        onPress() {
            scale.value = withSequence(
                withTiming(0.95, {
                    duration: 200
                }),
                withTiming(1, {
                    duration: 200
                })
            )

            padding.value = withSequence(
                withTiming(5, {
                    duration: 250
                }),
                withTiming(3.5, {
                    duration: 250
                })
            )

            setTimeout(onPress, 250)
        },
        onLongPress() {
            scale.value = withTiming(1)

            padding.value = withTiming(3.5, {
                duration: 600
            })

            onLongPress()
        }
    }
}

export default events