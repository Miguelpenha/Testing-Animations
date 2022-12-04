import { IData } from '../type'
import { FC } from 'react'
import { Container, Text } from './style'
import { FadeInDown } from 'react-native-reanimated'

interface Iprops {
    data: IData
    index: number
}

const Data: FC<Iprops> = ({ index, data }) => {
    return (
        <Container entering={FadeInDown.delay(400+(index*100)).duration(800)}>
            <Text>{data.label} </Text>
            <Text value>{data.value}</Text>
        </Container>
    )
}

export default Data