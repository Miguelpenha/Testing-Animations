import { Basic } from 'unsplash-js/src/methods/photos/types'
import { FC, useState, useEffect } from 'react'
import useAnimation from './useAnimation'
import * as Linking from 'expo-linking'
import { Share } from 'react-native'
import { Image, Container, Loading } from './style'

interface Iprops {
    image: Basic
    index: number
}

const ImageAnimated: FC<Iprops> = ({ index, image }) => {
    const [ratio, setRatio] = useState(1)
    const [isLoaded, setIsLoaded] = useState(false)
    const animation = useAnimation(
        index,
        async () => await Linking.openURL(image.links.html),
        async () => {
            await Share.share({
                url: image.links.html,
                title: image.user.name,
                message: image.links.html
            }, {
                dialogTitle: image.user.name
            })
        }
    )

    useEffect(() => {
        try {
            Image.getSize(image.urls.regular, (width, height) => setRatio(width/height))
        } catch {
            
        }
    }, [image])

    return (
        <Container disabled={!isLoaded} isLoaded={isLoaded} {...animation} activeOpacity={0.5}>
            <Image isLoaded={isLoaded} onLoad={() => setIsLoaded(true)} ratio={ratio} source={{ uri: image.urls.regular }}/>
            {!isLoaded && <Loading/>}
        </Container>
    )
}

export default ImageAnimated