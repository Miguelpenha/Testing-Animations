import { IVideo } from '../type'
import thumbnail from './thumbnail'
import randomValue from './randomValue'
import uuid from 'react-native-uuid'

const videos: IVideo[] = []

for (let count = 1;count <= 15;count++) {
    const views = randomValue()

    videos.push({
        thumbnail,
        views: views,
        id: uuid.v4().toString(),
        likes: randomValue(views),
        title: `Vídeo teste testando ${count}`
    })
}

export default videos