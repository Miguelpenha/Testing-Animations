import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import AnimatedNumber from 'react-native-animated-number'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    width: 90%;
    margin: 4%;
    padding: 3%;
    align-self: center;
    border-radius: 10px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Thumbnail = styled(Animated.Image)`
    width: 100%;
    aspect-ratio: 1.7;
    margin-bottom: 5%;
    border-radius: 15px;
`

export const Title = styled.Text`
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.color};
`

export const Views = styled(AnimatedNumber)`
    margin-top: 2%;
    font-size: ${RFPercentage(2.2)}px;
    color: ${props => props.theme.primary};
`