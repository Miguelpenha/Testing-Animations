import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    width: 90%;
    height: 17%;
    margin-top: 6%;
    overflow: hidden;
    margin-bottom: 5%;
    align-self: center;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    max-height: ${RFPercentage(30)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Phrase = styled(Animated.Text)`
    margin: 5%;
    font-weight: bold;
    text-align: center;
    font-size: ${RFPercentage(3.5)}px;
    color: ${props => props.theme.color};
`