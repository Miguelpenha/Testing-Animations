import { IVideo } from '../../Videos/type'
import { FC } from 'react'
import { Container, Icon } from './style'
import animation from './animation'
import onShare from './onShare'

interface Iprops {
    video: IVideo
}

const Share: FC<Iprops> = ({ video }) => {
    return (
        <Container entering={animation} onPress={() => onShare(video)}>
            <Icon name="share" size={24}/>
        </Container>
    )
}

export default Share