import { FC, useState, useEffect } from 'react'
import { IVideo } from '../type'
import Animated, { ZoomIn, FadeInDown } from 'react-native-reanimated'
import { Container, Thumbnail, Title, Numbers, ContainerNumber, IconNumber, Number } from './style'
import limitText from '../../../../utils/limitText'
import useAnimation from './useAnimation'
import * as Clipboard from 'expo-clipboard'
import SimpleToast from 'react-native-simple-toast'

interface Iprops {
    video: IVideo
    index: number
    onPress: () => void
}

const Video: FC<Iprops> = ({ video, index, onPress }) => {
    const [views, setViews] = useState(0)
    const [likes, setLikes] = useState(0)
    const { animationContainer, animationThumbnail, animationData } = useAnimation(index, onPress, onLongPress)

    function onLongPress() {
        Clipboard.setString(`https://video-example.com/${video.id}`)

        SimpleToast.show('Link do vídeo copiado!', SimpleToast.SHORT)
    }

    useEffect(() => {
        setTimeout(() => {
            setViews(video.views)
            setLikes(video.likes)
        }, 100*index)
    }, [])

    return (
        <Container {...animationContainer()}>
            <Thumbnail
                style={animationThumbnail}
                source={{ uri: video.thumbnail }}
                entering={ZoomIn.delay(300+(index*100)).duration(300)}
            />
            <Animated.View style={animationData} entering={FadeInDown.delay(300+(index*100)).duration(500)}>
                <Title>{limitText(video.title, 38)}</Title>
                <Numbers>
                    <ContainerNumber>
                        <IconNumber name="visibility" size={20}/>
                        <Number
                            time={25}
                            steps={45}
                            value={views}
                            formatter={views => `${views} visualizações`}
                        />
                    </ContainerNumber>
                    <ContainerNumber>
                        <IconNumber name="thumb-up" size={20}/>
                        <Number
                            time={25}
                            steps={45}
                            value={likes}
                            formatter={likes => `${likes} likes`}
                        />
                    </ContainerNumber>
                </Numbers>
            </Animated.View>
        </Container>
    )
}

export default Video