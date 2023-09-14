import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'

export const Container = styled.View`
    padding-bottom: 30%;
`

export const Title = styled(Animated.Text)`
    width: 80%;
    margin-top: 8%;
    margin-bottom: 4%;
    font-weight: bold;
    text-align: center;
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
    margin-top: 10%;
    align-self: center;
    border-radius: 50px;
`

export const Icon = styled(AntDesign)`
    color: ${props => props.theme.primary};
`

export const Item = styled(Animated.Text)`
    margin: 1% 0%;
    align-self: center;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.primary};
`