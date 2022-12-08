import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Word = styled(Animated.Text)`
    font-weight: bold;
    font-size: ${RFPercentage(3.4)}px;
    color: ${props => props.theme.primary};
`