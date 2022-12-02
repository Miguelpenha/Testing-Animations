import useAnimation from './useAnimation'
import { useTheme } from 'styled-components'
import { useState, useEffect } from 'react'
import { Input } from './style'

function InputFind() {
    const { inputAnimation, events } = useAnimation()
    const theme = useTheme()
    const [showPlaceholder, setShowPlaceholder] = useState(false)

    useEffect(() => {
        setTimeout(() => setShowPlaceholder(true), 1400)
    }, [])

    return (
        <Input
            {...events()}
            style={inputAnimation}
            placeholder="Pesquisar"
            editable={showPlaceholder}
            selectionColor={theme.primary}
            placeholderTextColor={showPlaceholder ? theme.primary : theme.backgroundColorSecondary}
        />
    )
}

export default InputFind