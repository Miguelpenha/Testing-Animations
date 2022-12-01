import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    elevation: 10;
    padding: 14% 0%;
    align-self: center;
    border-radius: 60px;
    background-color: ${props => props.theme.primary};
`