import { IPage } from '../../types'
import { FC, memo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, ContainerIcon, Icon, Title } from './style'
import limitText from '../../utils/limitText'
import ModalizeAbout from './ModalizeAbout'
import { useModalize } from 'react-native-modalize'

interface Iprops {
    page?: IPage
    more?: boolean
    children?: string
}

const HeaderBack: FC<Iprops> = ({ children, more=true, page }) => {
    const navigation = useNavigation()
    const modalize = useModalize()

    return (
        <Container>
            <ContainerIcon onPress={navigation.goBack}>
                <Icon name="arrow-back-ios" size={25}/>
            </ContainerIcon>
            <Title>{limitText(children, 25)}</Title>
            {more && page && <>
                <ContainerIcon direction="right" onPress={() => modalize.open()}>
                    <Icon direction="right" name="more-vert" size={30}/>
                </ContainerIcon>
                <ModalizeAbout page={page} modalize={modalize.ref}/>
            </>}
        </Container>
    )
}

export default memo(HeaderBack)