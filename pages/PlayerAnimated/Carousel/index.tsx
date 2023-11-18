import { IImage } from '../type'
import { MutableRefObject, Dispatch, FC, SetStateAction } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import CarouselRaw from 'react-native-snap-carousel'
import useHandlePress from './useHandlePress'
import images from '../images'
import { Dimensions } from 'react-native'
import ImageAnimated from './ImageAnimated'

interface IProps {
    currentImage: IImage
    modalizeAbout: MutableRefObject<IHandles>
    carouselRef: MutableRefObject<CarouselRaw<any>>
    setCurrentImage: Dispatch<SetStateAction<IImage>>
}

const Carousel: FC<IProps> = ({ carouselRef, setCurrentImage, currentImage, modalizeAbout }) => {
    const handlePress = useHandlePress(carouselRef, modalizeAbout)

    return (
        <CarouselRaw
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
                    onPress={() => handlePress(index)}
                />
            )}
        />
    )
}

export default Carousel