import { SharedValue, useAnimatedStyle } from 'react-native-reanimated'

function animationBorder(border: SharedValue<number>) {
    return useAnimatedStyle(() => ({
        borderRadius: border.value
    }), [])
}

export default animationBorder