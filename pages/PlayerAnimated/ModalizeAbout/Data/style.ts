import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.View)`
    width: 80%;
    margin: 0% 5%;
    padding-bottom: 4%;
    flex-direction: row;
`

interface Iprops {
    label?: boolean
}

export const Text = styled.Text<Iprops>`
    font-weight: bold;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.label ? props.theme.secondaryColor : props.theme.secondary};
`