import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { Circle as CircleRaw } from 'react-native-svg'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    width: 31%;
    height: 31%;
    margin-top: 30%;
    align-self: center;
`

export const Chart = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
`

export const Circle = styled(Animated.createAnimatedComponent(CircleRaw))`

`

export const Percentage = styled(Animated.Text)`
    bottom: 70%;
    font-weight: bold;
    position: absolute;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`