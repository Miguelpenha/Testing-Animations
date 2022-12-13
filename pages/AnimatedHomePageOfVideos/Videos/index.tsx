import { Container } from './style'
import videos from './videos'
import { IVideo } from './type'
import { ListRenderItemInfo } from 'react-native'
import Video from './Video'

function Videos () {
    return (
        <Container
            data={videos}
            keyExtractor={(item: IVideo) => item.id}
            renderItem={({ item: video, index }: ListRenderItemInfo<IVideo>) => (
                <Video video={video} index={index}/>
            )}
        />
    )
}

export default Videos