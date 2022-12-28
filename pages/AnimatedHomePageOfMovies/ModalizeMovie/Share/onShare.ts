import { IMovie } from '../../type'
import { Share } from 'react-native'

async function onShare(movie: IMovie) {
    await Share.share({
        title: movie.title,
        url: `https://www.google.com/search?q=${movie.title.replace(/ /g, '+')}`,
        message: `https://www.google.com/search?q=${movie.title.replace(/ /g, '+')}`
    }, {
        dialogTitle: movie.title
    })
}

export default onShare