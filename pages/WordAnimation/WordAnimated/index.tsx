import { FC, useState } from 'react'
import { Word } from './style'
import useAnimation from './useAnimation'

interface Iprops {
    delay?: number
    words: string[]
    initialIndex?: number
}

const WordAnimated: FC<Iprops> = ({ words, delay=1000, initialIndex=0 }) => {
    const [wordIndex, setWordIndex] = useState(initialIndex)
    const animation = useAnimation(delay, words, setWordIndex)

    return (
        <Word style={animation}>{words[wordIndex]}</Word>
    )
}

export default WordAnimated