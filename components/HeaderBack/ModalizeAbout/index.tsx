import { IPage } from '../../../types'
import { MutableRefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { useTheme } from 'styled-components'
import { Modalize as ModalizeRaw } from 'react-native-modalize'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { View } from 'react-native'
import { Title, Description, ContainerIcon, Icon, TitleLibs, Lib, TitleApis, Api } from './style'
import { FadeInDown, FadeInUp } from 'react-native-reanimated'
import useOnPress from './useOnPress'

interface Iprops {
    page: IPage
    modalize: MutableRefObject<IHandles>
}

const ModalizeAbout: FC<Iprops> = ({ page, modalize }) => {
    const theme = useTheme()
    const onPress = useOnPress(page.url)
    
    return (
        <ModalizeRaw
            ref={modalize}
            withReactModal
            snapPoint={RFPercentage(64)}
            modalHeight={RFPercentage(90 || 0)}
            modalStyle={{ backgroundColor: theme.backgroundColor }}
            handleStyle={{ width: RFPercentage(10), backgroundColor: theme.primary }}
        >
            <Title entering={FadeInDown.delay(200).duration(800)}>{page.title}</Title>
            <Description entering={FadeInDown.delay(400).duration(800)}>{page.description}</Description>
            <ContainerIcon onPress={onPress} entering={FadeInUp.delay(500).duration(400)}>
                <Icon size={45} name="github"/>
            </ContainerIcon>
            {page.libs && (
                <View>
                    <TitleLibs entering={FadeInUp.delay(700).duration(400)}>Bibliotecas usadas</TitleLibs>
                    {page.libs.map((lib, index) => (
                        <Lib entering={FadeInUp.delay(850+(50*index)).duration(400)} key={index}>{lib}</Lib>
                    ))}
                </View>
            )}
            {page.apis && (
                <View>
                    <TitleApis entering={FadeInUp.delay(900).duration(400)}>APIS usadas</TitleApis>
                    {page.apis.map((api, index) => (
                        <Api entering={FadeInUp.delay(1050+(50*index)).duration(400)} key={index}>{api}</Api>
                    ))}
                </View>
            )}
        </ModalizeRaw>
    )
}

export default ModalizeAbout