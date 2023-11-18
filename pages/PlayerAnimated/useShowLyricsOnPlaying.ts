import { IImage } from './type'
import { SharedValue, withTiming, withDelay } from 'react-native-reanimated'
import { MutableRefObject, Dispatch, SetStateAction, useEffect } from 'react'
import Carousel from 'react-native-snap-carousel'

function useShowLyricsOnPlaying(
    isPlaying: boolean,
    currentImage: IImage,
    opacityPhraseOfLyrics: SharedValue<number>,
    carouselRef: MutableRefObject<Carousel<any>>,
    translateYPhraseOfLyrics: SharedValue<number>,
    setIndexPhraseOfLyrics: Dispatch<SetStateAction<number>>
) {
    useEffect(() => {
        if (currentImage.lyrics && isPlaying) {
            const interval = setInterval(() => {
                opacityPhraseOfLyrics.value = withTiming(0.5, {
                    duration: 500
                })

                translateYPhraseOfLyrics.value = withDelay(200, withTiming(-130, {
                    duration: 1000
                }))

                setTimeout(() => setIndexPhraseOfLyrics(indexPhraseOfLyrics => {
                    translateYPhraseOfLyrics.value = 130
                    
                    opacityPhraseOfLyrics.value = withTiming(1, {
                        duration: 1000
                    })

                    translateYPhraseOfLyrics.value = withTiming(0, {
                        duration: 500
                    })

                    if (indexPhraseOfLyrics === currentImage.lyrics.split('\n').length) {
                        carouselRef.current.snapToNext()
                        
                        return 0
                    } else {
                        return indexPhraseOfLyrics+1
                    }
                }), 400)
            }, 3000)
            
            return () => clearInterval(interval)
        }
    }, [currentImage, isPlaying])
}

export default useShowLyricsOnPlaying