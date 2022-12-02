import { SharedValue, useAnimatedStyle } from 'react-native-reanimated'

function animationBorder(inputBorder: SharedValue<number>) {
    return useAnimatedStyle(() => ({
        borderRadius: inputBorder.value
    }), [])
}

export default animationBorder