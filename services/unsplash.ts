import { createApi } from 'unsplash-js'

const unsplash = createApi({
    accessKey: process.env.EXPO_PUBLIC_ACCESS_KEY_UNSPLASH
})

export default unsplash