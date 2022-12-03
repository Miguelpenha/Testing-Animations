import styled, { css } from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { Pressable } from 'react-native'

interface IContainer {
    select: boolean
}

export const Container = styled(Animated.createAnimatedComponent(Pressable))<IContainer>`
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-radius: 10px;

    ${props => props.select && css`
        background-color: ${props => props.theme.primary};
    `}
`

export const Image = styled.Image`
    aspect-ratio: 1;
`