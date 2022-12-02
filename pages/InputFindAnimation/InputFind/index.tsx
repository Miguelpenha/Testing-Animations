import useAnimation from './useAnimation'
import { useTheme } from 'styled-components'
import { Input } from './style'

function InputFind() {
    const { inputAnimation, events } = useAnimation()
    const theme = useTheme()

    return (
        <Input
            {...events()}
            style={inputAnimation}
            placeholder="Pesquisar"
            placeholderTextColor={theme.primary}
        />
    )
}

export default InputFind