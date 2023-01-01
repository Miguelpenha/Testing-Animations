import * as Clipboard from 'expo-clipboard'
import SimpleToast from 'react-native-simple-toast'
import baseURL from '../../../../services/tabNews/baseURL'

function onLongPress(author: string, slug: string) {
    const url = `${baseURL}/${author}/${slug}`

    Clipboard.setString(url)

    SimpleToast.show('Link da notícia copiado!', SimpleToast.SHORT)
}

export default onLongPress