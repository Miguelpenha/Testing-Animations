import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TextInput } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Input = styled(Animated.createAnimatedComponent(TextInput))`
    width: 45%;
    padding: 4%;
    elevation: 6;
    margin-top: 30%;
    align-self: center;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColorSecondary};
`