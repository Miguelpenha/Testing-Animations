import { IImage } from './type'
import { SharedValue, withTiming } from 'react-native-reanimated'
import { Dispatch, SetStateAction, useEffect } from 'react'

function useOnImageChange(
    currentImage: IImage,
    opacityPhraseOfLyrics: SharedValue<number>,
    translateYPhraseOfLyrics: SharedValue<number>,
    setIsPlaying: Dispatch<SetStateAction<boolean>>,
    setIndexPhraseOfLyrics: Dispatch<SetStateAction<number>>
) {
    useEffect(() => {
        setIsPlaying(true)

        setIndexPhraseOfLyrics(0)

        opacityPhraseOfLyrics.value = 0.5

        opacityPhraseOfLyrics.value = withTiming(1, {
            duration: 1000
        })

        translateYPhraseOfLyrics.value = 130

        translateYPhraseOfLyrics.value = withTiming(0, {
            duration: 800
        })
    }, [currentImage])
}

export default useOnImageChange