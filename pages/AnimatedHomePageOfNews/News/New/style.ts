import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    width: 90%;
    margin: 4%;
    align-self: center;
    border-radius: 15px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Header = styled.View`
    flex-direction: row;
`

export const Author = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.primary};
`

export const Date = styled.Text`
    margin-left: auto;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.primary};
`

export const Title = styled(Animated.Text)`
    margin-top: 3%;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.color};
`

export const Thumbnail = styled.Image`
    width: 100%;
    margin-top: 5%;
    border-radius: 10px;
    aspect-ratio: 1.9104477612;
`