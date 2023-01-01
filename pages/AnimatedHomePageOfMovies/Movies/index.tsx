import { IMovie } from '../type'
import { Dispatch, FC, SetStateAction } from 'react'
import usePropsRefreshControl from '../../../hooks/usePropsRefreshControl'
import getMovies from '../getMovies'
import { Container, Title } from './style'
import { RefreshControl, ListRenderItemInfo } from 'react-native'
import Movie from './Movie'

interface Iprops {
    movies: IMovie[]
    onSelectMovie: (movie: IMovie) => void
    setMovies: Dispatch<SetStateAction<IMovie[]>>
}

const Movies: FC<Iprops> = ({ movies, setMovies, onSelectMovie }) => {
    const propsRefreshControl = usePropsRefreshControl(async () => await getMovies(setMovies))

    return (
        <Container
            data={movies}
            refreshControl={<RefreshControl {...propsRefreshControl}/>}
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