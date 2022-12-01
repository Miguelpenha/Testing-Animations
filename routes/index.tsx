import { useTheme } from 'styled-components'
import { createStackNavigator } from '@react-navigation/stack'
import { INavigation } from '../types'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import themeRouter from './theme'
import Home from '../pages/Home'
import MediumAnimation from '../pages/MediumAnimation'

function Routes() {
  const theme = useTheme()
  const { Navigator, Screen } = createStackNavigator<INavigation>()

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={theme.backgroundColor}
        style={theme.name === 'dark' ? 'light' : 'dark'}
      />
      <NavigationContainer theme={themeRouter}>
        <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Screen name="Home" component={Home}/>
          <Screen name="MediumAnimation" component={MediumAnimation}/>
        </Navigator>
      </NavigationContainer>
    </>
  )
}

export default Routes