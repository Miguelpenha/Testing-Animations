import { IMovie } from '../type'
import { FC, useEffect, useState } from 'react'
import { Container, Title } from './style'
import { ListRenderItemInfo } from 'react-native'
import Movie from './Movie'
import getMovies from './getMovies'

interface Iprops {
    onSelectMovie: (movie: IMovie) => void
}

const Movies: FC<Iprops> = ({ onSelectMovie }) => {
    const [movies, setMovies] = useState<IMovie[]>([])

    useEffect(() => {
        getMovies(setMovies).then()
    }, [])

    return (
        <Container
            data={movies}
            ListHeaderComponent={<Title>Dados do Movie db</Title>}
            keyExtractor={(item: IMovie) => item.id}
            renderItem={({ item: movie, index }: ListRenderItemInfo<IMovie>) => (
                <Movie
                    movie={movie}
                    index={index}
                    onPress={() => onSelectMovie(movie)}
                />
            )}
        />
    )
}

export default Movies