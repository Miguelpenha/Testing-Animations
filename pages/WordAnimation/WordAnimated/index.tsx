import { FC, useState, useEffect } from 'react'
import { Word } from './style'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

interface Iprops {
    delay?: number
    words: string[]
    initialIndex?: number
}

const WordAnimated: FC<Iprops> = ({ words, delay=1000, initialIndex=0 }) => {
    const [wordIndex, setWordIndex] = useState(initialIndex)
    const opacity = useSharedValue(1)
    const translateY = useSharedValue(0)

    const animationFade = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }]
    }))

    useEffect(() => {
        const interval = setInterval(() => {
            opacity.value = withTiming(0)
            translateY.value = withTiming(10)
            
            setTimeout(() => {
                translateY.value = -10
                opacity.value = withTiming(1)
                translateY.value = withTiming(0)

                setWordIndex(index => index === words.length-1 ? 0 : index+1)
            }, 400)
        }, delay)
            
        return () => clearInterval(interval)
    }, [])

    return (
        <Word style={animationFade}>{words[wordIndex]}</Word>
    )
}

export default WordAnimated