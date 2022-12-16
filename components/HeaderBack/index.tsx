import { FC, memo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, ButtonBack, Title } from './style'
import limitText from '../../utils/limitText'

interface Iprops {
    children?: string
}

const HeaderBack: FC<Iprops> = ({ children }) => {
    const navigation = useNavigation()

    return (
        <Container>
            <ButtonBack onClick={navigation.goBack}/>
            <Title>{limitText(children, 25)}</Title>
        </Container>
    )
}

export default memo(HeaderBack)