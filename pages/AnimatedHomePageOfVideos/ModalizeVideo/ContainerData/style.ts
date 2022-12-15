import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'

export const Container = styled(Animated.createAnimatedComponent(TouchableOpacity))`
    width: 92%;
    padding: 2%;
    align-self: center;
    border-radius: 15px;
    flex-direction: row;
    align-items: center;
`