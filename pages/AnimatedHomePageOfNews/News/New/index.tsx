import { INew } from '../../type'
import { FC } from 'react'
import useAnimation from './useAnimation'
import onPress from './onPress'
import onLongPress from './onLongPress'
import { Container, Header, Author, Date, Title, Thumbnail } from './style'
import getThumbnail from '../../../../services/tabNews/getThumbnail'

interface Iprops {
    index: number
    newProp: INew
}

const New: FC<Iprops> = ({ index, newProp }) => {
    const animation = useAnimation(
        index,
        async () => onPress(newProp.author, newProp.slug),
        () => onLongPress(newProp.author, newProp.slug, newProp.title)
    )
    
    return (
        <Container {...animation}>
            <Header>
                <Author>{newProp.author}</Author>
                <Date>{newProp.published}</Date>
            </Header>
            <Title>{newProp.title}</Title>
            <Thumbnail source={{ uri: getThumbnail(newProp.author, newProp.slug) }}/>
        </Container>
    )
}

export default New