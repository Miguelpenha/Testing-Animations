import { Container, Version, PoweredBy, Title, Name, IconSocial, ContainerIconSocial } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Constants from 'expo-constants'
import onPress from './onPress'

function Footer() {
    return (
        <Container entering={FadeInDown}>
            <Version>Versão {Constants.manifest2.extra.expoClient.version}</Version>
            <PoweredBy>
                <Title>Powered by</Title>
                <Name>Miguel da Penha</Name>
                <ContainerIconSocial onPress={onPress}>
                    <IconSocial size={45} name="github"/>
                </ContainerIconSocial>
            </PoweredBy>
        </Container>
    )
}

export default Footer