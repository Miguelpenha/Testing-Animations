import * as Clipboard from 'expo-clipboard'
import SimpleToast from 'react-native-simple-toast'

function onCopyURI(uri: string) {
    Clipboard.setString(uri)

    SimpleToast.show('Link da capa do filme copiado!', SimpleToast.SHORT)
}

export default onCopyURI