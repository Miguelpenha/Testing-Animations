import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Images = styled.View`
    margin-top: 10%;
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