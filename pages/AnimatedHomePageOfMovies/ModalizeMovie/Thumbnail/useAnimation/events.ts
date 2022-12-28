import { SharedValue, withTiming } from 'react-native-reanimated'
import { TouchableOpacityProps } from 'react-native'

function events(scale: SharedValue<number>, onLongPress: () => void): TouchableOpacityProps {
    return {
        activeOpacity: 0.5,
        onPressIn() {
            scale.value = withTiming(0.9)
        },
        onPressOut() {
            scale.value = withTiming(1)
        },
        onLongPress() {
            scale.value = withTiming(1)

            onLongPress()
        }
    }
}

export default events