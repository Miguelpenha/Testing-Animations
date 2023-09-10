import { Container, Version, ContainerPoweredBy, TextPoweredBy, TextPoweredByName } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Constants from 'expo-constants'

function Footer() {
    return (
        <Container entering={FadeInDown}>
            <Version>Versão {Constants.manifest2.extra.expoClient.version}</Version>
            <ContainerPoweredBy>
                <TextPoweredBy>Powered by</TextPoweredBy>
                <TextPoweredByName>Miguel da Penha</TextPoweredByName>
            </ContainerPoweredBy>
        </Container>
    )
}

export default Footer