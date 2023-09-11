import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { AntDesign } from '@expo/vector-icons'

export const Container = styled(Animated.View)`
    margin-top: 10%;
    margin-bottom: 5%;
`

export const Version = styled.Text`
    align-self: center;
    font-size: ${RFPercentage(3.2)}px;
    color: ${props => props.theme.secondaryColor};
`

export const PoweredBy = styled.View`
    margin-top: 2%;
    align-items: center;
`

export const Title = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`

export const Name = styled.Text`
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`

export const ContainerIconSocial = styled.TouchableOpacity`
    margin-top: 5%;
    border-radius: 50px;
`

export const IconSocial = styled(AntDesign)`
    color: ${props => props.theme.primary};
`