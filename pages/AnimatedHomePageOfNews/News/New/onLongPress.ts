import baseURL from '../../../../services/tabNews/baseURL'
import { Share } from 'react-native'

async function onLongPress(author: string, slug: string, title: string) {
    const url = `${baseURL}/${author}/${slug}`

    await Share.share({
        url,
        title: title,
        message: url
    }, {
        dialogTitle: title
    })
}

export default onLongPress