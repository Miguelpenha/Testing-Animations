import * as Linking from 'expo-linking'
import baseURL from '../../../../services/tabNews/baseURL'

async function onPress(author: string, slug: string) {
    const url = `${baseURL}/${author}/${slug}`

    await Linking.openURL(url)
}

export default onPress