import { IMovie } from '../type'
import * as Linking from 'expo-linking'

async function onOpenExternal(movie: IMovie) {
    const url = `https://www.google.com/search?q=${movie.title.replace(/ /g, '+')}`

    await Linking.openURL(url)
}

export default onOpenExternal