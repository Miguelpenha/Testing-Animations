import { IVideo } from '../Videos/type'
import limitText from '../../../utils/limitText'
import { MaterialIcons } from '@expo/vector-icons'

interface IData {
    data: string
    value: string
    isTitle?: boolean
    icon: keyof typeof MaterialIcons.glyphMap
}

function useData(video: IVideo): IData[] {
    if (video) {
        return [
            {
                icon: 'title',
                isTitle: true,
                value: video.title,
                data: limitText(video.title, 29)
            },
            {
                icon: 'visibility',
                value: String(video.views),
                data: `${video.views} visualizações`
            },
            {
                icon: 'thumb-up',
                value: String(video.likes),
                data: `${video.likes} likes`
            },
        ]
    }
}

export default useData