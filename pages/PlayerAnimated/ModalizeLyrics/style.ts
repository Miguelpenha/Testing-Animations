import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Title = styled(Animated.Text)`
    margin-top: 5%;
    font-weight: bold;
    text-align: center;
    padding-bottom: 5%;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`

export const Container = styled(Animated.ScrollView)`
    
`