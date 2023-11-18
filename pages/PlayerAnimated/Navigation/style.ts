import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.View`
    width: 60%;
    margin-top: 5%;
    align-self: center;
    flex-direction: row;
    justify-content: space-between;
`

export const ContainerIcon = styled(Animated.createAnimatedComponent(TouchableOpacity)).attrs({
    activeOpacity: 0.4
})`
    
`

export const Icon = styled(MaterialIcons)`
    color: ${props => props.disabled ? props.theme.backgroundColorSecondary : props.theme.primary};
`