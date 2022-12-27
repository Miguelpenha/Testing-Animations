import { useState, useEffect } from 'react'
import { Basic } from 'unsplash-js/src/methods/photos/types'
import unsplash from '../../services/unsplash'

function useImages() {
    const [images, setImages] = useState<Basic[]>([])

    useEffect(() => {
        async function get() {
            const { response: { results: images } } = await unsplash.photos.list({  })

            setImages(images)
        }

        get().then()
    }, [])
    
    const half = Math.ceil(images.length/2)
    const imagesRow1 = images.slice(0, half)
    const imagesRow2 = images.slice(half)
    
    return {
        imagesRow1,
        imagesRow2
    }
}

export default useImages