import React, { useEffect } from 'react'
import updateApp from './utils/updateApp'
import * as SplashScreen from 'expo-splash-screen'
import { green } from './utils/colorsLogs'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Routes from './routes'
import 'react-native-url-polyfill/auto'

SplashScreen.preventAutoHideAsync()

function App() {
  useEffect(() => {
    updateApp().then()

    SplashScreen.hideAsync().then(() => {
      console.log(green('>> App Started'))
    })
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Routes/>
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}

export default App