import { TouchableOpacityProps } from 'react-native'
import { SharedValue, withTiming, withSequence } from 'react-native-reanimated'

function events(scale: SharedValue<number>): TouchableOpacityProps {
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
        }
    }
}

export default events