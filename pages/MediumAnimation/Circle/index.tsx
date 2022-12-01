import { IPadding } from '../type'
import { FC, memo } from 'react'
import useAnimation from './useAnimation'
import { FadeInDown } from 'react-native-reanimated'
import { Container } from './style'

interface Iprops {
    index: number
    padding: IPadding
    onPress: (index: number) => void
}

const Circle: FC<Iprops> = ({ padding, onPress, index }) => {
    const { containerAnimation, events } = useAnimation(padding)

    return (
        <Container
            activeOpacity={0.5}
            style={containerAnimation}
            {...events(() => onPress(index))}
            entering={FadeInDown.duration(800).delay(100)}
        />
    )
}

export default memo(Circle)