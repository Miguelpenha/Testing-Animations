import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    padding: 3%;
    align-self: center;
    border-radius: 30px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Icon = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`