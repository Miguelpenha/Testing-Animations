import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Container, ContainerWord, Label } from './style'
import WordAnimated from './WordAnimated'
import words from './words'
import { FadeInDown } from 'react-native-reanimated'

function WordAnimation() {
    const navigation = useNavigation()
    
    return (
        <ContainerPd>
            <HeaderBack title="Animação de palavras" onClick={() => navigation.goBack()}/>
            <Container>
                <ContainerWord entering={FadeInDown}>
                    <Label>A palavra é </Label>
                    <WordAnimated words={words}/>
                </ContainerWord>
                <ContainerWord entering={FadeInDown}>
                    <Label>A palavra é </Label>
                    <WordAnimated words={words}/>
                    <Label> e </Label>
                    <WordAnimated words={words} initialIndex={1}/>
                </ContainerWord>
                <ContainerWord entering={FadeInDown}>
                    <Label>A palavra é </Label>
                    <WordAnimated words={words} delay={1500}/>
                    <Label> e </Label>
                    <WordAnimated words={words} delay={800}/>
                </ContainerWord>
            </Container>
        </ContainerPd>
    )
}

export default WordAnimation