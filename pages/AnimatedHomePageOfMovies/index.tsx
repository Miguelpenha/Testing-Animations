import { useState, useRef, useEffect } from 'react'
import { IMovie } from './type'
import { IHandles } from 'react-native-modalize/lib/options'
import getMovies from './getMovies'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import Movies from './Movies'
import Loading from '../../components/Loading'
import onSelectMovie from './onSelectMovie'
import ModalizeMovie from './ModalizeMovie'

function AnimatedHomePageOfMovies() {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [movieSelect, setMovieSelect] = useState<IMovie>()
    const modalizeMovie = useRef<IHandles>(null)

    useEffect(() => {
        getMovies(setMovies).then()
    }, [])

    return (
        <ContainerPd>
            <HeaderBack>Página inicial animada de filmes</HeaderBack>
            {movies.length > 0 ? (
                <Movies movies={movies} setMovies={setMovies} onSelectMovie={movie => onSelectMovie(movie, setMovieSelect, modalizeMovie)}/>
            ) : (
                <Loading/>
            )}
            <ModalizeMovie movie={movieSelect} modalize={modalizeMovie}/>
        </ContainerPd>
    )
}

export default AnimatedHomePageOfMovies