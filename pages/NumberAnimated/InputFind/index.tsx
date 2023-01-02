import { FC } from 'react'
import { TextInputProps } from 'react-native'
import useAnimation from './useAnimation'
import { useTheme } from 'styled-components'
import { Input } from './style'
import { FadeInDown } from 'react-native-reanimated'

const InputFind: FC<TextInputProps> = props => {
    const animation = useAnimation()
    const theme = useTheme()

    return (
        <Input
            {...props}
            {...animation}
            placeholder="Número"
            keyboardType="numeric"
            selectionColor={theme.primary}
            entering={FadeInDown.delay(300).duration(500)}
            placeholderTextColor={theme.primary}
        />
    )
}

export default InputFind