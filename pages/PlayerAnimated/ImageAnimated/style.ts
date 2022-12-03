import styled, { css } from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { Pressable, Dimensions } from 'react-native'

interface IContainer {
    select: boolean
}

export const Container = styled(Animated.createAnimatedComponent(Pressable))<IContainer>`
    overflow: hidden;
    border-radius: 10px;
    width: ${Dimensions.get('window').width-Dimensions.get('window').width/4}px;

    ${props => props.select && css`
        background-color: ${props => props.theme.primary};
    `}
`

export const Image = styled.Image`
    aspect-ratio: 1;
`