import { useRef, useState } from 'react'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import page from './page'
import { Images, Music, Artist } from './style'
import images from './images'
import { IImage } from './type'
import { useSharedValue, FadeInDown } from 'react-native-reanimated'
import CarouselRaw from 'react-native-snap-carousel'
import ModalizeAbout from './ModalizeAbout'
import ModalizeLyrics from './ModalizeLyrics'
import { IHandles } from 'react-native-modalize/lib/options'
import Lyrics from './Lyrics'
import useOnImageChange from './useOnImageChange'
import useShowLyricsOnPlaying from './useShowLyricsOnPlaying'
import Carousel from './Carousel'
import Navigation from './Navigation'

function PlayerAnimated() {
    const [currentImage, setCurrentImage] = useState<IImage>(images[0])
    const [isPlaying, setIsPlaying] = useState(true)
    const opacityPhraseOfLyrics = useSharedValue(1)
    const translateYPhraseOfLyrics = useSharedValue(0)
    const [indexPhraseOfLyrics, setIndexPhraseOfLyrics] = useState(0)
    const carouselRef = useRef<CarouselRaw<any>>(null)
    const modalizeAbout = useRef<IHandles>(null)
    const modalizeLyrics = useRef<IHandles>(null)

    useOnImageChange(
        currentImage,
        opacityPhraseOfLyrics,
        translateYPhraseOfLyrics,
        setIsPlaying,
        setIndexPhraseOfLyrics
    )

    useShowLyricsOnPlaying(
        isPlaying,
        currentImage,
        opacityPhraseOfLyrics,
        carouselRef,
        translateYPhraseOfLyrics,
        setIndexPhraseOfLyrics
    )

    return (
        <ContainerPd>
            <HeaderBack page={page}>Player animado</HeaderBack>
            <Images>
                <Carousel
                    carouselRef={carouselRef}
                    currentImage={currentImage}
                    modalizeAbout={modalizeAbout}
                    setCurrentImage={setCurrentImage}
                />
            </Images>
            <Music entering={FadeInDown.duration(800)}>{currentImage.music}</Music>
            <Artist entering={FadeInDown.duration(1000)}>{currentImage.artist}</Artist>
            <Navigation
                isPlaying={isPlaying}
                carouselRef={carouselRef}
                currentImage={currentImage}
                setIsPlaying={setIsPlaying}
            />
            {currentImage.lyrics && (
                <Lyrics onPress={() => modalizeLyrics.current.open()} translateY={translateYPhraseOfLyrics} opacity={opacityPhraseOfLyrics} phrase={currentImage.lyrics.split('\n')[indexPhraseOfLyrics]}/>
            )}
            <ModalizeAbout image={currentImage} modalize={modalizeAbout}/>
            <ModalizeLyrics
                modalize={modalizeLyrics}
                currentImage={currentImage}
                setIsPlaying={setIsPlaying}
                indexPhraseOfLyrics={indexPhraseOfLyrics}
                setIndexPhraseOfLyrics={setIndexPhraseOfLyrics}
            />
        </ContainerPd>
    )
}

export default PlayerAnimated