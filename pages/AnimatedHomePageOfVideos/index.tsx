import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import limitText from '../../utils/limitText'
import Videos from './Videos'

function AnimatedHomePageOfVideos() {
    const navigation = useNavigation()

    return (
        <ContainerPd>
            <HeaderBack title={limitText('Página inicial animada de vídeos', 28)} onClick={navigation.goBack}/>
            <Videos/>
        </ContainerPd>
    )
}

export default AnimatedHomePageOfVideos