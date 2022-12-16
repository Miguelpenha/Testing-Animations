import styled from 'styled-components/native'
import ButtonBackNotStyled from '../ButtonBack'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    padding-top: 10%;
    flex-direction: row;
`

export const ButtonBack = styled(ButtonBackNotStyled)`
    margin-left: 2%;
    align-self: center;
`

export const Title = styled.Text`
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.secondaryColor};
`