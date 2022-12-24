import { IOption } from '../../type'
import { FC, memo } from 'react'
import { useNavigation } from '@react-navigation/native'
import useAnimation from './useAnimation'
import { Container, Text } from './style'

interface Iprops extends IOption {
    index: number
}

const Option: FC<Iprops> = ({ index, page, title }) => {
    const navigation = useNavigation()
    const animation = useAnimation(index, () => navigation.navigate(page))

    return (
        <Container {...animation}>
            <Text>{title}</Text>
        </Container>
    )
}

export default memo(Option)