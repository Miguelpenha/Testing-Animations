import { MutableRefObject } from 'react'
import CarouselRaw from 'react-native-snap-carousel'
import { IHandles } from 'react-native-modalize/lib/options'

function useHandlePress(carouselRef: MutableRefObject<CarouselRaw<any>>, modalizeAbout: MutableRefObject<IHandles>) {
    function handlePress(index: number) {
        if (carouselRef.current.currentIndex != index) {
            if (carouselRef.current.currentIndex > index) {
                carouselRef.current.snapToPrev()
            } else {
                carouselRef.current.snapToNext()
            }
        } else {
            setTimeout(() => {
                modalizeAbout.current.open()
            }, 100)
        }
    }

    return handlePress
}

export default useHandlePress