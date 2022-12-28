import { SharedValue, withTiming, withSequence } from 'react-native-reanimated'
import { TouchableOpacityProps } from 'react-native'

function events(scale: SharedValue<number>, padding: SharedValue<number>, onPress: () => void): TouchableOpacityProps {
    return {
        onPressIn() {
            scale.value = withTiming(0.9)

            padding.value = withTiming(5, {
                duration: 600
            })
        },
        onPressOut() {
            scale.value = withTiming(1)

            padding.value = withTiming(3, {
                duration: 600
            })
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

            padding.value = withSequence(
                withTiming(5, {
                    duration: 200
                }),
                withTiming(3, {
                    duration: 200
                })
            )

            onPress()
        }
    }
}

export default events