import { SharedValue, withTiming } from 'react-native-reanimated'
import { TextInputProps } from 'react-native'

function events(border: SharedValue<number>): TextInputProps {
    return {
        onFocus() {
            border.value = withTiming(15, {
                duration: 200
            })
        },
        onBlur() {
            border.value = withTiming(30, {
                duration: 200
            })
        }
    }
}

export default events