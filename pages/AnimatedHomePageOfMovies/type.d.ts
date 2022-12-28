export interface IMovieRaw {
    id: string
    title: string
    vote_count: number
    vote_average: number
    backdrop_path: string
}

export interface IMovie {
    id: string
    title: string
    votes: number
    image: string
    average: number
}