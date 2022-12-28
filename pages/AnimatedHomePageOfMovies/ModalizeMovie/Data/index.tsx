import { FC } from 'react'
import { Container, Icon, Value } from './style'
import animation from './animation'
import onCopy from './onCopy'

interface Iprops {
    icon: string
    index: number
    value: string
    isTitle?: boolean
}

const Data: FC<Iprops> = ({ index, value, icon, isTitle, children }) => {
    return (
        <Container
            activeOpacity={0.5}
            entering={animation(index)}
            onLongPress={() => onCopy(value)}
        >
            <Icon name={icon} size={24}/>
            <Value isTitle={isTitle}>{children}</Value>
        </Container>
    )
}

export default Data