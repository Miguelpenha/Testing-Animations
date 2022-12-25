import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { StyleSheet } from 'react-native'

export const Title = styled(Animated.Text)`
    margin-top: 12%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`

const style = StyleSheet.create({
    optionsContainerStyle: {
        paddingBottom: '10%'
    }
})

const optionsContainerStyle = style.optionsContainerStyle

export {
    optionsContainerStyle
}