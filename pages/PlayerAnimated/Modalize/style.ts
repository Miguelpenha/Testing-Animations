import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Title = styled(Animated.Text)`
    margin-top: 8%;
    font-weight: bold;
    align-self: center;
    padding-bottom: 5%;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`