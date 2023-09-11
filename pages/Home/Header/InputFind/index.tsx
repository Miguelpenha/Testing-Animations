import { Dispatch, SetStateAction, FC } from 'react'
import { useTheme } from 'styled-components'
import useAnimation from './useAnimation'
import { Input } from './style'
import { FadeInDown } from 'react-native-reanimated'

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
            entering={FadeInDown.duration(200).delay(200)}
        />
    )
}

export default InputFind