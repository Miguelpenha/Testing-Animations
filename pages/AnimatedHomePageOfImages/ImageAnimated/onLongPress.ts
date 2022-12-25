import * as Clipboard from 'expo-clipboard'
import SimpleToast from 'react-native-simple-toast'

function onLongPress(image: string) {
    Clipboard.setString(image)

    SimpleToast.show('Link da imagem copiado!', SimpleToast.SHORT)
}

export default onLongPress