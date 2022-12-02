import { useSharedValue } from 'react-native-reanimated'
import events from './events'
import animationWidth from './animations/width'
import animationOpacity from './animations/opacity'
import animationTranslateY from './animations/translateY'
import animationBorder from './animations/border'

function useAnimation() {
    const inputBorder = useSharedValue(30)

    return {
        events: () => events(inputBorder),
        inputAnimation: [
            animationWidth(),
            animationOpacity(),
            animationTranslateY(),
            animationBorder(inputBorder)
        ]
    }
}

export default useAnimation