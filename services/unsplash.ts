import { createApi } from 'unsplash-js'

const unsplash = createApi({
    accessKey: process.env.ACCESS_KEY
})

export default unsplash