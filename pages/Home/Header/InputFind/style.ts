import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TextInput } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Input = styled(Animated.createAnimatedComponent(TextInput))`
    width: 65%;
    elevation: 5;
    padding: 3.5%;
    margin-top: 10%;
    margin-bottom: 5%;
    align-self: center;
    border-radius: 20px;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.color};
    border: 2px solid ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundColor};
`