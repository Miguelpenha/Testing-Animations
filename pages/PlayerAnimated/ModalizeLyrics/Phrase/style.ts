import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    max-width: 85%;
    margin-top: 8%;
    align-self: center;
`

interface IValue {
    select?: boolean
}

export const Value = styled.Text<IValue>`
    text-align: center;
    font-size: ${RFPercentage(3.5)}px;
    font-weight: ${props => props.select ? 'bold' : 'normal'};
    color: ${props => props.select ? props.theme.color : props.theme.backgroundColorSecondary};
`