import { IVideo } from '../type'
import thumbnail from './thumbnail'
import randomValue from './randomValue'
import uuid from 'react-native-uuid'

const videos: IVideo[] = []

for (let count = 1;count <= 15;count++) {
    videos.push({
        thumbnail,
        views: randomValue(),
        likes: randomValue(),
        title: `Vídeo teste testando ${count}`,
        id: uuid.v4().toString()
    })
}

export default videos