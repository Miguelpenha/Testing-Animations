import { IMovie } from './type'
import { Dispatch, SetStateAction, MutableRefObject } from 'react'
import { IHandles } from 'react-native-modalize/lib/options'

function onSelectMovie(movie: IMovie, setMovie: Dispatch<SetStateAction<IMovie>>, modalize: MutableRefObject<IHandles>) {
    setMovie(movie)

    modalize.current.open()
}

export default onSelectMovie