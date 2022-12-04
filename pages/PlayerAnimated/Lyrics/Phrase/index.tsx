import { FC } from 'react'
import { Container, Value } from './style'
import * as Clipboard from 'expo-clipboard'
import SimpleToast from 'react-native-simple-toast'

interface Iprops {
    index: number
    phrase: string
    onPress: () => void
    indexPhraseOfLyrics: number
}

const Phrase: FC<Iprops> = ({ phrase, onPress, indexPhraseOfLyrics, index }) => {
    return (
        <Container activeOpacity={0.4} onPress={onPress} onLongPress={() => {
            Clipboard.setString(phrase)

            SimpleToast.show('Frase copiada!', SimpleToast.SHORT)
        }}>
            <Value select={indexPhraseOfLyrics === index}>{phrase}</Value>
        </Container>
    )
}

export default Phrase