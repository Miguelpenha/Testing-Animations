import React, { useState, useEffect } from 'react'
import updateApp from './utils/updateApp'
import AppLoading from 'expo-app-loading'
import { green } from './utils/colorsLogs'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Routes from './routes'
import 'react-native-gesture-handler'

function App() {
  const [isReady, setReady] = useState(false)

  useEffect(() => {
    updateApp().then()

    setReady(true)
  }, [])

  if (!isReady) {
    return <AppLoading/>
  } else {
    console.log(green('>> App Started'))

    return (
      <ThemeProvider theme={theme}>
        <Routes/>
      </ThemeProvider>
    )
  }

  console.log(green('>> App Started'))

  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  )
}

export default App