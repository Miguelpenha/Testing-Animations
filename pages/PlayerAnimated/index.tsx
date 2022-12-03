import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { ContainerImages } from './style'
import ImageAnimated from './ImageAnimated'
import Carousel from 'react-native-snap-carousel'
import { Dimensions } from 'react-native'
import uuid from 'react-native-uuid'
import { useState, useRef } from 'react'

const imageURL = 'https://e-cdns-images.dzcdn.net/images/cover/b69d3bcbd130ad4cc9259de543889e30/380x380-000000-80-0-0.jpg'

const images = []

for (let count = 0;count < 5;count++) {
    images.push({
        id: uuid.v4(),
        url: imageURL
    })
}

function PlayerAnimated() {
    const navigation = useNavigation()
    const carouselRef = useRef<Carousel<any>>(null)
    const [itemSelect, setItemSelect] = useState(images[0].id)

    return (
        <ContainerPd>
            <HeaderBack onClick={() => navigation.goBack()} title="Player animado"/>
            <ContainerImages>
                <Carousel
                    data={images}
                    ref={carouselRef}
                    activeSlideOffset={10}
                    sliderWidth={Dimensions.get('window').width}
                    onSnapToItem={slide => setItemSelect(images[slide].id)}
                    itemWidth={Dimensions.get('window').width-Dimensions.get('window').width/4}
                    renderItem={({ item, index }) => (
                        <ImageAnimated
                            id={item.id}
                            image={item.url}
                            itemSelect={itemSelect}
                            onPress={() => {
                                if (carouselRef.current.currentIndex != index) {
                                    if (carouselRef.current.currentIndex > index) {
                                        carouselRef.current.snapToPrev()
                                    } else {
                                        carouselRef.current.snapToNext()
                                    }
                                }
                            }}
                        />
                    )}
                />
            </ContainerImages>
        </ContainerPd>
    )
}

export default PlayerAnimated