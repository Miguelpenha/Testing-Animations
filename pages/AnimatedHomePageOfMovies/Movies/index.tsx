import { IMovie } from '../type'
import { FC } from 'react'
import { Container, Title } from './style'
import { ListRenderItemInfo } from 'react-native'
import Movie from './Movie'

interface Iprops {
    movies: IMovie[]
    onSelectMovie: (movie: IMovie) => void
}

const Movies: FC<Iprops> = ({ movies, onSelectMovie }) => {
    return (
        <Container
            data={movies}
            keyExtractor={(item: IMovie) => item.id}
            ListHeaderComponent={<Title>Dados do Movie db</Title>}
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