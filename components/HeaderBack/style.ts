import styled, { css } from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    padding-top: 12%;
    flex-direction: row;
`

interface IContainerIcon {
    direction?: 'left' | 'right'
}

export const ContainerIcon = styled.TouchableOpacity<IContainerIcon>`
    align-self: center;

    ${props => props.direction === 'right' && css`
        margin-left: auto;
    `}
`

interface IIcon {
    direction?: 'left' | 'right'
}

export const Icon = styled(MaterialIcons)<IIcon>`
    align-self: center;
    color: ${props => props.theme.secondaryColor};

    ${props => {
        if (props.direction === 'right') {
            return css`
                margin-right: 5%;
                margin-left: auto;
            `
        } else {
            return css`
                left: 20%;
                margin-right: 5%;
            `
        }
    }}
`

export const Title = styled.Text`
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.secondaryColor};
`