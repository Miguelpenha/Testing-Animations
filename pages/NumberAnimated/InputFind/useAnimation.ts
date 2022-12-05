import { TextInputProps } from 'react-native'
import { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated'

function useAnimation(): TextInputProps {
    const border = useSharedValue(30)

    return {
        onFocus() {
            border.value = withTiming(15)
        },
        onBlur() {
            border.value = withTiming(30)
        },
        style: useAnimatedStyle(() => ({
            borderRadius: border.value
        }), [])
    }
}

export default useAnimation