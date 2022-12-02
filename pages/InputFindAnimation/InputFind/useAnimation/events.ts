import { SharedValue, withTiming } from 'react-native-reanimated'
import { TextInputProps } from 'react-native'

function events(border: SharedValue<number>): TextInputProps {
    return {
        onFocus() {
            border.value = withTiming(15)
        },
        onBlur() {
            border.value = withTiming(30)
        }
    }
}

export default events