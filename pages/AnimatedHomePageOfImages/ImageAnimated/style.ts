import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import LoadingRaw from '../../../components/Loading'

interface IContainer {
    isLoaded: boolean
}

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))<IContainer>`
    margin: 3%;
    z-index: 10;
    overflow: hidden;
    border-radius: 25px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

interface IImage {
    ratio: number
    isLoaded: boolean
}

export const Image = styled.Image<IImage>`
    aspect-ratio: ${props => props.ratio};
    opacity: ${props => props.isLoaded ? 1 : 0};
`

export const Loading = styled(LoadingRaw)`
    top: 0%;
    left: 0%;
    right: 0%;
    bottom: 0%;
    position: absolute;
`