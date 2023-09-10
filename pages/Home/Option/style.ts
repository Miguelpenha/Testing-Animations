import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    width: 65%;
    elevation: 4;
    margin-top: 10%;
    padding: 3.5% 4%;
    align-self: center;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Text = styled.Text`
    font-weight: bold;
    align-self: center;
    text-align: center;
    font-size: ${RFPercentage(2.8)}px;
    color: ${props => props.theme.primary};
`