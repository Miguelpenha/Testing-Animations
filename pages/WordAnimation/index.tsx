import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import page from './page'
import { Container, ContainerWord, Label } from './style'
import { FadeInDown } from 'react-native-reanimated'
import WordAnimated from './WordAnimated'
import words from './words'

function WordAnimation() {
    return (
        <ContainerPd>
            <HeaderBack page={page}>Animação de palavras</HeaderBack>
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