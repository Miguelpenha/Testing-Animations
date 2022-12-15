import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

export const Container = styled.View`
    padding-bottom: 5%;
`

export const Thumbnail = styled(Animated.Image)`
    width: 95%;
    margin-top: 3%;
    margin-bottom: 5%;
    aspect-ratio: 1.7;
    align-self: center;
    border-radius: 15px;
`

export const Title = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.primary};
`

export const Icon = styled(MaterialIcons)`
    margin-right: 5%;
    color: ${props => props.theme.primary};
`

export const Data = styled.Text`
    font-size: ${RFPercentage(2.8)}px;
    color: ${props => props.theme.primary};
`

export const ContainerShare = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    padding: 2%;
    margin-top: 8%;
    margin-right: 7%;
    border-radius: 20px;
    align-self: flex-end;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const IconShare = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`