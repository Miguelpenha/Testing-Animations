import * as Linking from 'expo-linking'

function useOnPress(url: string) {
    async function onPress() {
        await Linking.openURL(url)
    }

    return onPress
}

export default useOnPress