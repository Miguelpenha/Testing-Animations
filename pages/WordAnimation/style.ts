import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    margin-top: 35%;
    align-items: center;
`

export const ContainerWord = styled(Animated.View)`
    margin-bottom: 10%;
    flex-direction: row;
`

export const Label = styled.Text`
    font-size: ${RFPercentage(3.5)}px;
    color: ${props => props.theme.secondaryColor};
`