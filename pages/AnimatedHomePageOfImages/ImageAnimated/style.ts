import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import LoadingRaw from '../../../components/Loading'
import { Image as ImageExpo } from 'expo-image'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    margin: 3%;
    z-index: 10;
    overflow: hidden;
    border-radius: 25px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

interface IImage {
    ratio: number
}

export const Image = styled(ImageExpo)<IImage>`
    aspect-ratio: ${props => props.ratio};
`

export const Loading = styled(LoadingRaw)`
    top: 0%;
    left: 0%;
    right: 0%;
    bottom: 0%;
    position: absolute;
`