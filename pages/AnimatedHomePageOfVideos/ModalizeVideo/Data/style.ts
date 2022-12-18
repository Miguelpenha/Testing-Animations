import styled, { css } from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    width: 92%;
    padding: 2%;
    align-self: center;
    border-radius: 15px;
    flex-direction: row;
    align-items: center;
`

export const Icon = styled(MaterialIcons)`
    margin-right: 5%;
    color: ${props => props.theme.primary};
`

interface IValue {
    isTitle: boolean
}

export const Value = styled.Text<IValue>`
    color: ${props => props.theme.primary};
    font-size: ${props => RFPercentage(props.isTitle ? 3.2 : 2.8)}px;

    ${props => props.isTitle && css`
        font-weight: bold;
    `}
`