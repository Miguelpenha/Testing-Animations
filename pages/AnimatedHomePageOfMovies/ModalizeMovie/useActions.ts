import { MaterialIcons } from '@expo/vector-icons'
import { IMovie } from '../type'
import onShare from './onShare'
import onOpenExternal from './onOpenExternal'

interface IAction {
    onPress: () => void
    icon: keyof typeof MaterialIcons.glyphMap
}

function useActions(movie: IMovie): IAction[] {
    return [
        {
            icon: 'share',
            onPress: () => onShare(movie)
        },
        {
            icon: 'open-in-new',
            onPress: async () => await onOpenExternal(movie)
        }
    ]
}

export default useActions