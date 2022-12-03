import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { ContainerImages } from './style'
import ImageAnimated from './ImageAnimated'
import Carousel from 'react-native-snap-carousel'
import { Dimensions } from 'react-native'
import uuid from 'react-native-uuid'
import { useState } from 'react'

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
    const [itemSelect, setItemSelect] = useState(images[0].id)

    return (
        <ContainerPd>
            <HeaderBack onClick={() => navigation.goBack()} title="Player animado"/>
            <ContainerImages>
                <Carousel
                    data={images}
                    itemWidth={310}
                    onSnapToItem={slide => setItemSelect(images[slide].id)}
                    sliderWidth={Dimensions.get('window').width}
                    renderItem={({ item }) => <ImageAnimated itemSelect={itemSelect} id={item.id} image={item.url}/>}
                />
            </ContainerImages>
        </ContainerPd>
    )
}

export default PlayerAnimated