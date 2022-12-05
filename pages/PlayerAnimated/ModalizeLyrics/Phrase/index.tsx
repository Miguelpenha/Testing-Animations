import { FC, useRef, useEffect, useState } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, Value } from './style'
import { FadeInDown } from 'react-native-reanimated'
import * as Clipboard from 'expo-clipboard'
import SimpleToast from 'react-native-simple-toast'

interface Iprops {
    index: number
    phrase: string
    onPress: () => void
    indexPhraseOfLyrics: number
    onScroll: (x: number, y: number) => void
}

const Phrase: FC<Iprops> = ({ phrase, onPress, indexPhraseOfLyrics, index, onScroll }) => {
    const phraseRef = useRef<TouchableOpacityProps>(null)
    const [positionX, setPositionX] = useState<number>()
    const [positionY, setPositionY] = useState<number>()

    useEffect(() => {
        if (indexPhraseOfLyrics === index && positionX && positionY) {
            onScroll(positionX, positionY)
        }
    }, [indexPhraseOfLyrics, positionX, positionY])

    return (
        <Container onLayout={event => {
            const layout = event.nativeEvent.layout

            setPositionX(layout.x)
            setPositionY(layout.y)
        }} ref={phraseRef as any} entering={FadeInDown.delay(300+index*20).duration(200)} activeOpacity={0.4} onPress={onPress} onLongPress={() => {
            Clipboard.setString(phrase)

            SimpleToast.show('Frase copiada!', SimpleToast.SHORT)
        }}>
            <Value select={indexPhraseOfLyrics === index}>{phrase}</Value>
        </Container>
    )
}

export default Phrase