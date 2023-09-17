import { IMovie } from '../../type'

function useAverage(movie: IMovie) {
    const average = `${String(movie.average) == movie.average.toFixed(0) ? movie.average : movie.average} média`

    return average
}

export default useAverage