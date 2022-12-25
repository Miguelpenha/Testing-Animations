import { Dispatch, SetStateAction, useEffect } from 'react'
import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
import onChangeWord from './onChangeWord'

function useAnimation(delay: number, words: string[], setWordIndex: Dispatch<SetStateAction<number>>) {
    const opacity = useSharedValue(1)
    const translateY = useSharedValue(0)

    const animationFade = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }]
    }))

    useEffect(() => {
        const interval = onChangeWord(delay, opacity, translateY, words, setWordIndex)
            
        return () => clearInterval(interval)
    }, [])

    return animationFade
}

export default useAnimation