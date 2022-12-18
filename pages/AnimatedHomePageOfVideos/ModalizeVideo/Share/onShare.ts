import { Share } from 'react-native'
import { IVideo } from '../../Videos/type'

async function onShare(video: IVideo) {
    await Share.share({
        title: video.title,
        url: `https://video-example.com/${video.id}`,
        message: `https://video-example.com/${video.id}`
    }, {
        dialogTitle: video.title
    })
}

export default onShare