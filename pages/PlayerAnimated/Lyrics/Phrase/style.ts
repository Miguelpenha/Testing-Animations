import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.TouchableOpacity`
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
    color: ${props => props.select ? props.theme.color : props.theme.backgroundColor};
`