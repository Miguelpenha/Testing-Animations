import { IImage } from '../type'
import { MutableRefObject, FC } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'
import { useTheme } from 'styled-components'
import { Modalize as ModalizeRaw } from 'react-native-modalize'
import { Dimensions } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { Title } from './style'
import { FadeInDown } from 'react-native-reanimated'
import Data from './Data'
import organizeDatas from './organizeDatas'

interface Iprops {
    image: IImage
    modalize: MutableRefObject<IHandles>
}

const Modalize: FC<Iprops> = ({ image, modalize }) => {
    const theme = useTheme()
    const datas = organizeDatas(image)
    
    return (
        <ModalizeRaw
            ref={modalize}
            modalHeight={image.lyrics ? Dimensions.get('window').height*6.4 : Dimensions.get('window').height-500}
            modalStyle={{ backgroundColor: theme.backgroundColor }}
            handleStyle={{ width: RFPercentage(10), backgroundColor: theme.primary }}
        >
            <Title entering={FadeInDown.delay(200).duration(800)}>Sobre</Title>
            {datas.map((data, index) => <Data key={index} index={index} data={data}/>)}
        </ModalizeRaw>
    )
}

export default Modalize