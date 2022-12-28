import { MaterialIcons } from '@expo/vector-icons'
import { FC } from 'react'
import { Container, Icon } from './style'
import useAnimation from './useAnimation'

interface Iprops {
    index: number
    onPress: () => void
    icon: keyof typeof MaterialIcons.glyphMap
}

const Action: FC<Iprops> = ({ index, onPress, icon }) => {
    const animation = useAnimation(index, onPress)

    return (
        <Container {...animation}>
            <Icon name={icon} size={24}/>
        </Container>
    )
}

export default Action