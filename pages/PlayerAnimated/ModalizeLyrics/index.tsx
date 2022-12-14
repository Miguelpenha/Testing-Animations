import { IImage } from '../type'
import { Dispatch, SetStateAction, MutableRefObject, FC, useRef } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { ScrollView } from 'react-native'
import { useTheme } from 'styled-components'
import { Modalize as ModalizeRaw } from 'react-native-modalize'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { Title, Container } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Phrase from './Phrase'

interface Iprops {
    currentImage: IImage
    indexPhraseOfLyrics: number
    modalize: MutableRefObject<IHandles>
    setIsPlaying: Dispatch<SetStateAction<boolean>>
    setIndexPhraseOfLyrics: Dispatch<SetStateAction<number>>
}

const Modalize: FC<Iprops> = ({ modalize, currentImage, indexPhraseOfLyrics, setIndexPhraseOfLyrics, setIsPlaying }) => {
    const theme = useTheme()
    const lyricsRef = useRef<ScrollView>(null)
    
    return (
        <ModalizeRaw
            ref={modalize}
            snapPoint={RFPercentage(64)}
            modalHeight={RFPercentage(90 || 0)}
            contentRef={lyricsRef}
            modalStyle={{ backgroundColor: theme.backgroundColor }}
            handleStyle={{ width: RFPercentage(10), backgroundColor: theme.primary }}
            HeaderComponent={<Title entering={FadeInDown.delay(200).duration(800)}>Letra</Title>}
        >
            <Container>
                {currentImage.lyrics.split('\n').map((phrase, index) => phrase && (
                    <Phrase
                        key={index}
                        index={index}
                        phrase={phrase}
                        indexPhraseOfLyrics={indexPhraseOfLyrics}
                        onScroll={(x, y) => lyricsRef.current?.scrollTo({ x, y: y-30, animated: true })}
                        onPress={() => {
                            setIndexPhraseOfLyrics(index)
                            setIsPlaying(true)
                        }}
                    />
                ))}
            </Container>
        </ModalizeRaw>
    )
}

export default Modalize