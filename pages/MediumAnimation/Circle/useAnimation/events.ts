import { SharedValue, withTiming, withSequence } from 'react-native-reanimated'
import { TouchableOpacityProps } from 'react-native'

function events(padding: 'big' | 'medium' | 'small', pressed: SharedValue<number>, onPress: () => void): TouchableOpacityProps {
    return {
        onPressOut: () => {
            if (padding !== 'big') {
                pressed.value = withTiming(1)
            }
        },
        onPressIn: () => {
            if (padding !== 'big') {
                pressed.value = withTiming(0.8)
            }
        },
        onPress: () => {
            if (padding !== 'big') {
                pressed.value = withSequence(
                    withTiming(0.8, {
                        duration: 200
                    }),
                    withTiming(1, {
                        duration: 200
                    })
                )

                onPress()
            }
        }
    }
}

export default events