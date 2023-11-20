import styled from 'styled-components/native'
import { FlashList } from '@shopify/flash-list'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(FlashList)`
    margin-top: 5%;
`

export const Title = styled(Animated.Text)`
    margin: 2% 0%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`