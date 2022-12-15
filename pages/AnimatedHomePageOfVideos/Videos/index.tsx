import { IVideo } from './type'
import { FC } from 'react'
import { Container } from './style'
import videos from './videos'
import { ListRenderItemInfo } from 'react-native'
import Video from './Video'

interface Iprops {
    onSelectVideo: (video: IVideo) => void
}

const Videos: FC<Iprops> = ({ onSelectVideo }) => {
    return (
        <Container
            data={videos}
            keyExtractor={(item: IVideo) => item.id}
            renderItem={({ item: video, index }: ListRenderItemInfo<IVideo>) => (
                <Video
                    video={video}
                    index={index}
                    onPress={() => onSelectVideo(video)}
                />
            )}
        />
    )
}

export default Videos