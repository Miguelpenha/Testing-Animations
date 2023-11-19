import { Dispatch, SetStateAction } from 'react'
import { IMovie, IMovieRaw } from './type'
import moviedb from '../../services/moviedb'
import getImage from '../../services/moviedb/getPoster'

async function getMovies(setMovies: Dispatch<SetStateAction<IMovie[]>>) {
    const { results: moviesRaw }: { results: IMovieRaw[] }  = (await moviedb.get('/discover/movie')).data
    const movies: IMovie[] = []
    
    moviesRaw.map(async movieRaw => 
        movies.push({
            id: movieRaw.id,
            title: movieRaw.title,
            votes: movieRaw.vote_count,
            average: movieRaw.vote_average,
            image: getImage(movieRaw.backdrop_path)
        })
    )

    setMovies(movies)
}

export default getMovies