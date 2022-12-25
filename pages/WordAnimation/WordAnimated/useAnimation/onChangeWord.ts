import { Dispatch, SetStateAction } from 'react'
import { SharedValue, withTiming } from 'react-native-reanimated'

function onChangeWord(delay: number, opacity: SharedValue<number>, translateY: SharedValue<number>, words: string[], setWordIndex: Dispatch<SetStateAction<number>>) {
    return setInterval(() => {
        opacity.value = withTiming(0)
        translateY.value = withTiming(10)
        
        setTimeout(() => {
            translateY.value = -10
            opacity.value = withTiming(1)
            translateY.value = withTiming(0)

            setWordIndex(index => index === words.length-1 ? 0 : index+1)
        }, 400)
    }, delay)
}

export default onChangeWord