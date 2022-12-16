import * as SplashScreen from 'expo-splash-screen'
import React, { useState, useEffect } from 'react'
import updateApp from './utils/updateApp'
import { green } from './utils/colorsLogs'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Routes from './routes'
import 'react-native-gesture-handler'

SplashScreen.preventAutoHideAsync()

function App() {
  const [isReady, setReady] = useState(false)
  
  useEffect(() => {
    async function prepare() {
      await updateApp()

      setReady(true)
      
      await SplashScreen.hideAsync()
    }

    prepare().then()
  }, [])
  
  if (!isReady) {
    return null
  }
  
  console.log(green('>> App Started'))

  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  )
}

export default App