import { Dispatch, SetStateAction, FC } from 'react'
import { useTheme } from 'styled-components'
import useAnimation from './useAnimation'
import { Input } from './style'

interface IProps {
    setFind: Dispatch<SetStateAction<string>>
}

const InputFind: FC<IProps> = ({ setFind }) => {
    const theme = useTheme()
    const { events, inputAnimation } = useAnimation()

    return (
        <Input
            {...events()}
            style={inputAnimation}
            onChangeText={setFind}
            placeholder="Pesquisar"
            selectionColor={theme.primary}
            placeholderTextColor={theme.primary}
        />
    )
}

export default InputFind