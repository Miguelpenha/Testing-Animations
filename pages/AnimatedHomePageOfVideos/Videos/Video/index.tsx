import { FC, useState, useEffect } from 'react'
import { IVideo } from '../type'
import { Container, Thumbnail, Title, Views } from './style'
import Animated, { ZoomIn, FadeInDown } from 'react-native-reanimated'
import limitText from '../../../../utils/limitText'
import animation from './animation'

interface Iprops {
    video: IVideo
    index: number
}

const Video: FC<Iprops> = ({ video, index }) => {
    const [views, setViews] = useState(0)

    useEffect(() => {
        setTimeout(() => setViews(video.views), 100*index)
    }, [])

    return (
        <Container {...animation(index)}>
            <Thumbnail entering={ZoomIn.delay(300+(index*100)).duration(300)} source={{ uri: video.thumbnail }}/>
            <Animated.View entering={FadeInDown.delay(300+(index*100)).duration(500)}>
                <Title>{limitText(video.title, 38)}</Title>
                <Views
                    time={25}
                    steps={45}
                    value={views}
                    formatter={views => `${views} visualizações`}
                />
            </Animated.View>
        </Container>
    )
}

export default Video