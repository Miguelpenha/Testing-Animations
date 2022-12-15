import { FC } from 'react'
import { Container } from './style'
import { FadeInDown } from 'react-native-reanimated'
import * as Clipboard from 'expo-clipboard'
import SimpleToast from 'react-native-simple-toast'

interface Iprops {
    index: number
    valueToCopy: string
}

const ContainerData: FC<Iprops> = ({ index, valueToCopy, children }) => {
    return (
        <Container
            activeOpacity={0.5}
            entering={FadeInDown.delay(200+(index*200)).duration(500)}
            onPress={() => {
                Clipboard.setString(valueToCopy)

                SimpleToast.show('Dado copiado!', SimpleToast.SHORT)
            }}
        >
            {children}
        </Container>
    )
}

export default ContainerData