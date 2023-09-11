import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'

export const Title = styled(Animated.Text)`
    margin: 8% 0%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3.5)}px;
    color: ${props => props.theme.primary};
`

export const Description = styled(Animated.Text)`
    width: 80%;
    line-height: 28px;
    align-self: center;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.primary};
`

export const ContainerIcon = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    margin-top: 15%;
    align-self: center;
    border-radius: 50px;
`

export const Icon = styled(AntDesign)`
    color: ${props => props.theme.primary};
`