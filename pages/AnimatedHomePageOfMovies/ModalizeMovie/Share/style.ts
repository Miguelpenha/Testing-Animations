import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    padding: 2%;
    margin-top: 8%;
    margin-right: 7%;
    border-radius: 20px;
    align-self: flex-end;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Icon = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`