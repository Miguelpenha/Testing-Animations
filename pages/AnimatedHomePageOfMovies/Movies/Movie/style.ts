import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    width: 90%;
    margin: 4%;
    align-self: center;
    border-radius: 10px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`

export const Thumbnail = styled(Animated.Image)`
    width: 100%;
    aspect-ratio: 1.7;
    border-radius: 15px;
`

export const Data = styled(Animated.View)`
    margin-top: 5%;
`

export const Title = styled.Text`
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.color};
`

export const Numbers = styled.View`
    margin-top: 4%;
    flex-direction: row;
    justify-content: space-between;
`

export const ContainerNumber = styled.View`
    align-items: center;
    flex-direction: row;
`

export const IconNumber = styled(MaterialIcons)`
    margin-right: 5%;
    color: ${props => props.theme.primary};
`

export const Number = styled.Text`
    font-size: ${RFPercentage(2.2)}px;
    color: ${props => props.theme.primary};
`