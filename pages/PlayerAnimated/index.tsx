import { useNavigation } from '@react-navigation/native'
import { useRef, useState, useEffect } from 'react'
import Carousel from 'react-native-snap-carousel'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Images, Music, Artist, Nav, ContainerIconNav, IconNav } from './style'
import images from './images'
import { Dimensions } from 'react-native'
import { IImage } from './type'
import ImageAnimated from './ImageAnimated'
import { FadeIn, FadeInDown, FadeInRight, FadeInLeft } from 'react-native-reanimated'
import Modalize from './Modalize'
import { IHandles } from 'react-native-modalize/lib/options'
import Lyrics from './Lyrics'

function PlayerAnimated() {
    const navigation = useNavigation()
    const [currentImage, setCurrentImage] = useState<IImage>(images[0])
    const [isPlaying, setIsPlaying] = useState(true)
    const [indexPhraseOfLyrics, setIndexPhraseOfLyrics] = useState(0)
    const carouselRef = useRef<Carousel<any>>(null)
    const modalize = useRef<IHandles>(null)

    useEffect(() => {
        setIsPlaying(true)
        setIndexPhraseOfLyrics(0)
    }, [currentImage])

    useEffect(() => {
        if (currentImage.lyrics && isPlaying) {
            const interval = setInterval(() => {
                setIndexPhraseOfLyrics(indexPhraseOfLyrics => {
                    if (indexPhraseOfLyrics === currentImage.lyrics.split('\n').length) {
                        carouselRef.current.snapToNext()
                        
                        return 0
                    } else {
                        return indexPhraseOfLyrics+1
                    }
                })
            }, 2000)
            
            return () => clearInterval(interval)
        }
    }, [currentImage, isPlaying])

    return (
        <ContainerPd scroll>
            <HeaderBack onClick={() => navigation.goBack()} title="Player animado"/>
            <Images>
                <Carousel
                    data={images}
                    ref={carouselRef}
                    swipeThreshold={16}
                    enableMomentum={true}
                    inactiveSlideOpacity={1}
                    sliderWidth={Dimensions.get('window').width}
                    onBeforeSnapToItem={index => setCurrentImage(images[index])}
                    itemWidth={Dimensions.get('window').width-Dimensions.get('window').width/4}
                    renderItem={({ item: image, index }: { item: IImage, index: number }) => (
                        <ImageAnimated
                            image={image}
                            currentImage={currentImage.id}
                            onPress={() => {
                                if (carouselRef.current.currentIndex != index) {
                                    if (carouselRef.current.currentIndex > index) {
                                        carouselRef.current.snapToPrev()
                                    } else {
                                        carouselRef.current.snapToNext()
                                    }
                                } else {
                                    setTimeout(() => {
                                        modalize.current.open()
                                    }, 100)
                                }
                            }}
                        />
                    )}
                />
            </Images>
            <Music entering={FadeInDown.duration(800)}>{currentImage.music}</Music>
            <Artist entering={FadeInDown.duration(1000)}>{currentImage.artist}</Artist>
            <Nav>
                <ContainerIconNav entering={FadeInRight.delay(700).duration(500)} disabled={currentImage.id === images[0].id} onPress={() => carouselRef.current.snapToPrev()}>
                    <IconNav name="fast-rewind" size={50} disabled={currentImage.id === images[0].id}/>
                </ContainerIconNav>
                <ContainerIconNav entering={FadeIn.delay(700).duration(500)} onPress={() => setIsPlaying(!isPlaying)}>
                    <IconNav name={isPlaying ? 'pause' : 'play-arrow'} size={50}/>
                </ContainerIconNav>
                <ContainerIconNav entering={FadeInLeft.delay(700).duration(500)} disabled={currentImage.id === images[images.length-1].id} onPress={() => carouselRef.current.snapToNext()}>
                    <IconNav name="fast-forward" size={50} disabled={currentImage.id === images[images.length-1].id}/>
                </ContainerIconNav>
            </Nav>
            {currentImage.lyrics && (
                <Lyrics
                    currentImage={currentImage}
                    indexPhraseOfLyrics={indexPhraseOfLyrics}
                    setIndexPhraseOfLyrics={setIndexPhraseOfLyrics}
                />
            )}
            <Modalize image={currentImage} modalize={modalize}/>
        </ContainerPd>
    )
}

export default PlayerAnimated