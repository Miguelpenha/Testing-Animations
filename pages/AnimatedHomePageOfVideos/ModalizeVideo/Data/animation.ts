import { FadeInDown } from "react-native-reanimated"

function animation(index: number) {
    const animation = FadeInDown.delay(200+(index*200)).duration(500)

    return animation
}

export default animation