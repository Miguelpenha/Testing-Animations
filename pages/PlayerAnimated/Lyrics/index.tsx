import { IImage } from '../type'
import { Dispatch, SetStateAction, FC } from 'react'
import { Container } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Phrase from './Phrase'

interface Iprops {
    currentImage: IImage
    indexPhraseOfLyrics: number
    setIndexPhraseOfLyrics: Dispatch<SetStateAction<number>>
}

const Lyrics: FC<Iprops> = ({ currentImage, indexPhraseOfLyrics, setIndexPhraseOfLyrics }) => {
    return (
        <Container entering={FadeInDown.delay(800).duration(800)} activeOpacity={0.8}>
            {currentImage.lyrics.split('\n').map((phrase, index) => phrase && (
                <Phrase
                    index={index}
                    phrase={phrase}
                    indexPhraseOfLyrics={indexPhraseOfLyrics}
                    onPress={() => setIndexPhraseOfLyrics(index)}
                />
            ))}
        </Container>
    )
}

export default Lyrics