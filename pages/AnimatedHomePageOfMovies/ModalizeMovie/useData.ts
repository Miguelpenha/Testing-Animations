import { IMovie } from '../type'
import limitText from '../../../utils/limitText'
import { MaterialIcons } from '@expo/vector-icons'

interface IData {
    data: string
    value: string
    isTitle?: boolean
    icon: keyof typeof MaterialIcons.glyphMap
}

function useData(movie: IMovie): IData[] {
    if (movie) {
        return [
            {
                icon: 'title',
                isTitle: true,
                value: movie.title,
                data: limitText(movie.title, 29)
            },
            {
                icon: 'thumbs-up-down',
                value: String(movie.votes),
                data: `${movie.votes} votos`
            },
            {
                value: String(movie.average),
                data: `${movie.average} média`,
                icon: `thumb-${movie.average >= 7 ? 'up' : 'down'}`
            },
        ]
    }
}

export default useData