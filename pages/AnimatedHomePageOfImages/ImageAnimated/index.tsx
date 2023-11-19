import { Basic } from 'unsplash-js/src/methods/photos/types'
import { FC, useState, useEffect } from 'react'
import useAnimation from './useAnimation'
import * as Linking from 'expo-linking'
import { Share } from 'react-native'
import { Image, Container, Loading } from './style'
import { Image as ImageRN } from 'react-native'

interface Iprops {
    image: Basic
    index: number
}

const ImageAnimated: FC<Iprops> = ({ index, image }) => {
    const [ratio, setRatio] = useState<number>()
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
            ImageRN.getSize(image.urls.full, (width, height) => setRatio(width/height))
        } catch {
            
        }
    }, [image])

    return (
        <Container {...animation} activeOpacity={0.5}>
            {image.blur_hash && ratio ? (
                <Image
                    ratio={ratio}
                    transition={1000}
                    contentFit="cover"
                    placeholder={image.blur_hash}
                    source={{ uri: image.urls.full }}
                />
            ) : <Loading/>}
        </Container>
    )
}

export default ImageAnimated