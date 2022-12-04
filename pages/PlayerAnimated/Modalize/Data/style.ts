import styled, { css } from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { Text as TextRN } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.createAnimatedComponent(TextRN))`
    margin-left: 5%;
    font-weight: bold;
    padding-bottom: 4%;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.secondaryColor};
`

interface IText {
    value?: boolean
}

export const Text = styled.Text<IText>`
    ${props => props.value && css`
        color: ${props => props.theme.secondary};
    `}
`