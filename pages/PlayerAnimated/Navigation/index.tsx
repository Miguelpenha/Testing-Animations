import { IImage } from '../type'
import { MutableRefObject, Dispatch, SetStateAction, FC } from 'react'
import Carousel from 'react-native-snap-carousel'
import { ComplexAnimationBuilder, FadeInRight, FadeIn, FadeInLeft } from 'react-native-reanimated'
import images from '../images'
import { Container, ContainerIcon, Icon } from './style'

interface IProps {
    isPlaying: boolean
    currentImage: IImage
    carouselRef: MutableRefObject<Carousel<any>>
    setIsPlaying: Dispatch<SetStateAction<boolean>>
}

const Navigation: FC<IProps> = ({ currentImage, carouselRef, setIsPlaying, isPlaying }) => {
    const animation = (animation: ComplexAnimationBuilder) => animation.delay(700).duration(500)
    const disabledLeft = currentImage.id === images[0].id
    const disableRight = currentImage.id === images[images.length-1].id

    return (
        <Container>
            <ContainerIcon entering={animation(new FadeInRight)} disabled={disabledLeft} onPress={() => carouselRef.current.snapToPrev()}>
                <Icon name="fast-rewind" size={50} disabled={disabledLeft}/>
            </ContainerIcon>
            <ContainerIcon entering={animation(new FadeIn)} onPress={() => setIsPlaying(!isPlaying)}>
                <Icon name={isPlaying ? 'pause' : 'play-arrow'} size={50}/>
            </ContainerIcon>
            <ContainerIcon entering={animation(new FadeInLeft)} disabled={disableRight} onPress={() => carouselRef.current.snapToNext()}>
                <Icon name="fast-forward" size={50} disabled={disableRight}/>
            </ContainerIcon>
        </Container>
    )
}

export default Navigation