import { useState, useRef } from 'react'
import { IMovie } from './type'
import { IHandles } from 'react-native-modalize/lib/options'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import Movies from './Movies'
import ModalizeMovie from './ModalizeMovie'
import onSelectMovie from './onSelectMovie'

function AnimatedHomePageOfMovies() {
    const [movieSelect, setMovieSelect] = useState<IMovie>()
    const modalizeMovie = useRef<IHandles>(null)

    return (
        <ContainerPd>
            <HeaderBack>Página inicial animada de filmes</HeaderBack>
            <Movies onSelectMovie={movie => onSelectMovie(movie, setMovieSelect, modalizeMovie)}/>
            <ModalizeMovie movie={movieSelect} modalize={modalizeMovie}/>
        </ContainerPd>
    )
}

export default AnimatedHomePageOfMovies