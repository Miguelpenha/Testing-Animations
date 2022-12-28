import * as Clipboard from 'expo-clipboard'
import SimpleToast from 'react-native-simple-toast'

function onCopy(value: string) {
    Clipboard.setString(value)

    SimpleToast.show('Dado copiado!', SimpleToast.SHORT)
}

export default onCopy