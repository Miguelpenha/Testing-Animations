import { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated'

function animationWidth() {
    const width = useSharedValue(60)
    
    setTimeout(() => 
        width.value = withTiming(200, {
            duration: 500
        })
    , 900)

    return useAnimatedStyle(() => ({
        width: width.value
    }), [])
}

export default animationWidth