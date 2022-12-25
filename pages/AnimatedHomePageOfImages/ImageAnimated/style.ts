import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    width: 100%;
    padding: 4%;
`

interface IImage {
    ratio: number
}

export const Image = styled.Image<IImage>`
    width: 100%;
    border-radius: 25px;
    aspect-ratio: ${props => props.ratio};
`