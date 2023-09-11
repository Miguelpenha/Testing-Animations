import * as Linking from 'expo-linking'

const url = 'https://github.com/Miguelpenha'

async function onPress() {
    await Linking.openURL(url)
}

export default onPress