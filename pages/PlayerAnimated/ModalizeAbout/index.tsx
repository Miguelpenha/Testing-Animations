import { IImage } from '../type'
import { MutableRefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { useTheme } from 'styled-components'
import { Modalize as ModalizeRaw } from 'react-native-modalize'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { Title, ContainerIcon, Icon } from './style'
import { FadeInDown, ZoomIn } from 'react-native-reanimated'
import Data from './Data'
import organizeDatas from './organizeDatas'
import * as Clipboard from 'expo-clipboard'
import SimpleToast from 'react-native-simple-toast'
import * as Linking from 'expo-linking'

interface Iprops {
    image: IImage
    modalize: MutableRefObject<IHandles>
}

const ModalizeAbout: FC<Iprops> = ({ image, modalize }) => {
    const theme = useTheme()
    const datas = organizeDatas(image)
    
    return (
        <ModalizeRaw
            ref={modalize}
            snapPoint={RFPercentage(64)}
            modalHeight={RFPercentage(90 || 0)}
            modalStyle={{ backgroundColor: theme.backgroundColor }}
            handleStyle={{ width: RFPercentage(10), backgroundColor: theme.primary }}
        >
            <Title entering={FadeInDown.delay(200).duration(800)}>Sobre</Title>
            {datas.map((data, index) => <Data key={index} index={index} data={data}/>)}
            <ContainerIcon onLongPress={async () => {
                await Clipboard.setStringAsync(image.link)

                SimpleToast.show('Link da música copiado!', SimpleToast.SHORT)
            }} onPress={async () => await Linking.openURL(image.link)} entering={ZoomIn.delay(datas.length*200).duration(400)}>
                <Icon size={45} name="spotify"/>
            </ContainerIcon>
        </ModalizeRaw>
    )
}

export default ModalizeAbout