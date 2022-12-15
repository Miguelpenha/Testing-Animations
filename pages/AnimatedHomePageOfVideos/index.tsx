import { useNavigation } from '@react-navigation/native'
import { useState, useRef } from 'react'
import { IVideo } from './Videos/type'
import { IHandles } from 'react-native-modalize/lib/options'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import limitText from '../../utils/limitText'
import Videos from './Videos'
import ModalizeVideo from './ModalizeVideo'

function AnimatedHomePageOfVideos() {
    const navigation = useNavigation()
    const [videoSelect, setVideoSelect] = useState<IVideo>()
    const modalizeVideo = useRef<IHandles>(null)

    return (
        <ContainerPd>
            <HeaderBack title={limitText('Página inicial animada de vídeos', 28)} onClick={navigation.goBack}/>
            <Videos onSelectVideo={video => {
                setVideoSelect(video)

                modalizeVideo.current.open()
            }}/>
            <ModalizeVideo video={videoSelect} modalize={modalizeVideo}/>
        </ContainerPd>
    )
}

export default AnimatedHomePageOfVideos