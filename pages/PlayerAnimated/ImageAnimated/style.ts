import styled, { css } from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { Pressable, Dimensions } from 'react-native'
import FastImage from 'expo-fast-image'

interface IContainer {
    current: boolean
}

export const Container = styled(Animated.createAnimatedComponent(Pressable))<IContainer>`
    overflow: hidden;
    border-radius: 10px;
    width: ${Dimensions.get('window').width-Dimensions.get('window').width/4}px;

    ${props => props.current && css`
        background-color: ${props => props.theme.primary};
    `}
`

export const Image = styled(FastImage)`
    aspect-ratio: 1;
`