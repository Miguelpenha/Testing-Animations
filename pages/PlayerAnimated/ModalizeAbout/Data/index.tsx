import { IData } from '../type'
import { FC } from 'react'
import { Container, Text } from './style'
import { FadeInDown } from 'react-native-reanimated'
import * as Clipboard from 'expo-clipboard'
import SimpleToast from 'react-native-simple-toast'
import { TouchableOpacity } from 'react-native'

interface Iprops {
    data: IData
    index: number
}

const Data: FC<Iprops> = ({ index, data }) => {
    return (
        <Container entering={FadeInDown.delay(400+(index*100)).duration(800)}>
            <Text label>{data.label} </Text>
            <TouchableOpacity onPress={() => {
                Clipboard.setString(data.value)

                SimpleToast.show('Dado copiado!', SimpleToast.SHORT)
            }}>
                <Text>{data.value}</Text>
            </TouchableOpacity>
        </Container>
    )
}

export default Data