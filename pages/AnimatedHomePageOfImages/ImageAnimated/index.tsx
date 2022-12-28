import { Basic } from 'unsplash-js/src/methods/photos/types'
import { FC, useState, useEffect } from 'react'
import { Image, Container } from './style'
import * as Linking from 'expo-linking'
import animation from './animation'

interface Iprops {
    image: Basic
    index: number
}

const ImageAnimated: FC<Iprops> = ({ index, image }) => {
    const [ratio, setRatio] = useState(1)

    useEffect(() => {
        try {
            Image.getSize(image.links.download, (width, height) => setRatio(width/height))
        } catch {
            
        }
    }, [image])

    return (
        <Container onPress={async () => await Linking.openURL(image.links.html)} {...animation(index)} activeOpacity={0.5}>
            <Image ratio={ratio} source={{ uri: image.links.download }}/>
        </Container>
    )
}

export default ImageAnimated