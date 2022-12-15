import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Title = styled.Text`
    margin-top: 16%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`

export const Button = styled.TouchableOpacity`
    width: 65%;
    elevation: 8;
    margin-top: 10%;
    padding: 3.5% 4%;
    align-self: center;
    border-radius: ${RFPercentage(2)}px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const TextButton = styled.Text`
    font-weight: bold;
    align-self: center;
    text-align: center;
    font-size: ${RFPercentage(2.8)}px;
    color: ${props => props.theme.primary};
`