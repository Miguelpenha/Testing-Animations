import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.View)`
    margin-top: 10%;
    margin-bottom: 5%;
`

export const Version = styled.Text`
    align-self: center;
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.secondaryColor};
`

export const ContainerPoweredBy = styled.View`
    margin-top: 2%;
    align-items: center;
`

export const TextPoweredBy = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`

export const TextPoweredByName = styled.Text`
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`