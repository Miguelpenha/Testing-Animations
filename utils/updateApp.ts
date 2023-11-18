import * as Updates from 'expo-updates'
import { green } from './colorsLogs'

async function updateApp() {
  if (process.env.NODE_ENV === 'production') {
    const { isAvailable } = await Updates.checkForUpdateAsync()
    
    if (isAvailable) {
        console.log(green('>> Update Available'))

        await Updates.fetchUpdateAsync()
        await Updates.reloadAsync()

        return true
    } else {
        return false
    }
  } else {
      return false
  }
}

export default updateApp