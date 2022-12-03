import { useRef, useState, useEffect } from 'react'
import { TextInput } from 'react-native'
import useAnimation from './useAnimation'
import { useTheme } from 'styled-components'
import { Input } from './style'

function InputFind() {
    const inputRef = useRef<TextInput>(null)
    const [showPlaceholder, setShowPlaceholder] = useState(false)
    const { inputAnimation, events } = useAnimation()
    const theme = useTheme()

    useEffect(() => {
        setTimeout(() => {
            setShowPlaceholder(true)

            setTimeout(() => {
                inputRef.current?.blur()
                inputRef.current?.focus()
            }, 100)
        }, 1300)
    }, [])

    return (
        <Input
            {...events()}
            ref={inputRef}
            style={inputAnimation}
            placeholder="Pesquisar"
            editable={showPlaceholder}
            selectionColor={theme.primary}
            placeholderTextColor={showPlaceholder ? theme.primary : theme.backgroundColorSecondary}
        />
    )
}

export default InputFind