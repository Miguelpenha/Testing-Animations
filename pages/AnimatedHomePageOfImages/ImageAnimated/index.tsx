import { FC, useState, useEffect } from 'react'
import { Image, Container } from './style'
import onLongPress from './onLongPress'
import animation from './animation'

interface Iprops {
    index: number
    image: string
}

const ImageAnimated: FC<Iprops> = ({ index, image }) => {
    const [ratio, setRatio] = useState(1)

    useEffect(() => {
        Image.getSize(image, (width, height) => setRatio(width/height))
    }, [image])

    return (
        <Container onLongPress={() => onLongPress(image)} {...animation(index)} activeOpacity={0.5}>
            <Image ratio={ratio} source={{ uri: image }}/>
        </Container>
    )
}

export default ImageAnimated