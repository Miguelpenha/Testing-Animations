import { SharedValue, useAnimatedStyle, FadeInDown } from 'react-native-reanimated'
import { FC } from 'react'
import { Container, Phrase } from './style'
import * as Clipboard from 'expo-clipboard'
import SimpleToast from 'react-native-simple-toast'

interface Iprops {
    phrase: string
    onPress: () => void
    opacity: SharedValue<number>
    translateY: SharedValue<number>
}

const Lyrics: FC<Iprops> = ({ opacity, translateY, phrase, onPress }) => {
    const animationPhrase = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }]
    }))

    return (
        <Container onPress={onPress} entering={FadeInDown.delay(800).duration(800)} activeOpacity={0.8} onLongPress={() => {
            Clipboard.setString(phrase)

            SimpleToast.show('Frase copiada!', SimpleToast.SHORT)
        }}>
            <Phrase style={animationPhrase}>{phrase}</Phrase>
        </Container>
    )
}

export default Lyrics