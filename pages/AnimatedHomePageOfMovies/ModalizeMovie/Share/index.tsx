import { IMovie } from '../../type'
import { FC } from 'react'
import { Container, Icon } from './style'
import animation from './animation'
import onShare from './onShare'

interface Iprops {
    movie: IMovie
}

const Share: FC<Iprops> = ({ movie }) => {
    return (
        <Container entering={animation} onPress={() => onShare(movie)}>
            <Icon name="share" size={24}/>
        </Container>
    )
}

export default Share