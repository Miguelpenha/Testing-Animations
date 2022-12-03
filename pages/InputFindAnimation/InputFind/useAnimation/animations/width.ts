import { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated'

function animationWidth() {
    const width = useSharedValue(55)
    
    setTimeout(() => 
        width.value = withTiming(200, {
            duration: 500
        })
    , 800)

    return useAnimatedStyle(() => ({
        width: width.value
    }), [])
}

export default animationWidth