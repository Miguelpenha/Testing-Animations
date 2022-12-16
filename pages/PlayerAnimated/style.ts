import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export const Images = styled.View`
    margin-top: 12%;
    margin-bottom: 8%;
`

export const Music = styled(Animated.Text)`
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`

export const Artist = styled(Animated.Text)`
    margin-top: 2%;
    font-weight: 100;
    align-self: center;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.primary};
`

export const Nav = styled.View`
    width: 60%;
    margin-top: 5%;
    align-self: center;
    flex-direction: row;
    justify-content: space-between;
`

export const ContainerIconNav = styled(Animated.createAnimatedComponent(TouchableOpacity)).attrs({
    activeOpacity: 0.4
})`
    
`

export const IconNav = styled(MaterialIcons)`
    color: ${props => props.disabled ? props.theme.backgroundColorSecondary : props.theme.primary};
`