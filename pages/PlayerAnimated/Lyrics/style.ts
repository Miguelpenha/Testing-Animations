import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    width: 90%;
    margin-top: 15%;
    margin-bottom: 5%;
    align-self: center;
    padding-bottom: 8%;
    border-radius: 15px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`