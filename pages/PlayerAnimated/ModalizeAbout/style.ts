import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export const Title = styled(Animated.Text)`
    margin-top: 8%;
    font-weight: bold;
    align-self: center;
    padding-bottom: 5%;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`

export const ContainerIcon = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    margin-top: 10%;
    align-self: center;
    border-radius: 50px;
`

export const Icon = styled(Entypo)`
    color: ${props => props.theme.primary};
`