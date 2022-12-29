import { Basic } from 'unsplash-js/src/methods/photos/types'
import { FC, useState, useEffect } from 'react'
import useAnimation from './useAnimation'
import * as Linking from 'expo-linking'
import { Image, Container } from './style'

interface Iprops {
    image: Basic
    index: number
}

const ImageAnimated: FC<Iprops> = ({ index, image }) => {
    const [ratio, setRatio] = useState(1)
    const animation = useAnimation(index, async () => await Linking.openURL(image.links.html))

    useEffect(() => {
        try {
            Image.getSize(image.links.download, (width, height) => setRatio(width/height))
        } catch {
            
        }
    }, [image])

    return (
        <Container {...animation} activeOpacity={0.5}>
            <Image ratio={ratio} source={{ uri: image.links.download }}/>
        </Container>
    )
}

export default ImageAnimated