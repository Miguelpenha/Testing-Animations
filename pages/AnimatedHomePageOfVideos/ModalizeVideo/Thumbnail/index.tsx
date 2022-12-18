import { FC } from 'react'
import useAnimation from './useAnimation'
import { Container, Image } from './style'
import onCopyURI from './onCopyURI'

interface Iprops {
    uri: string
}

const Thumbnail: FC<Iprops> = ({ uri }) => {
    const animation = useAnimation(() => onCopyURI(uri))

    return (
        <Container {...animation}>
            <Image source={{ uri }}/>
        </Container>
    )
}

export default Thumbnail