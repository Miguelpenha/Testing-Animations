import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    width: 95%;
    margin-top: 3%;
    overflow: hidden;
    margin-bottom: 5%;
    align-self: center;
    border-radius: 15px;
    background-color: red;
`

export const Image = styled.Image`
    aspect-ratio: 1.7;
`