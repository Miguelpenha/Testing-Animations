import styled from 'styled-components/native'
import AnimatedNumberRaw from 'react-native-animated-number'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const AnimatedNumber = styled(AnimatedNumberRaw)`
    margin-top: 10%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(8)}px;
    color: ${props => props.theme.primary};
`