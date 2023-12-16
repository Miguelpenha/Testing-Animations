import { IMovie } from '../type'
import { Dispatch, FC, SetStateAction } from 'react'
import usePropsRefreshControl from '../../../hooks/usePropsRefreshControl'
import getMovies from '../getMovies'
import { FlashList } from '@shopify/flash-list'
import { Title } from './style'
import { RefreshControl } from 'react-native'
import { ListRenderItemInfo } from '@shopify/flash-list'
import Movie from './Movie'

interface Iprops {
    movies: IMovie[]
    onSelectMovie: (movie: IMovie) => void
    setMovies: Dispatch<SetStateAction<IMovie[]>>
}

const Movies: FC<Iprops> = ({ movies, setMovies, onSelectMovie }) => {
    const propsRefreshControl = usePropsRefreshControl(async () => await getMovies(setMovies))

    return (
        <FlashList
            data={movies}
            estimatedItemSize={300}
            keyExtractor={(item: IMovie) => item.id}
            contentContainerStyle={{ paddingTop: 5 }}
            ListHeaderComponent={<Title>Dados do Movie db</Title>}
            refreshControl={<RefreshControl {...propsRefreshControl}/>}
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