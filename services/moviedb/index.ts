import axios from 'axios'

const moviedb = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY_MOVIEDB}`
    }
})

export default moviedb