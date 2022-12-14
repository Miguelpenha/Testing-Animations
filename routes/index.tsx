import { useTheme } from 'styled-components'
import { createStackNavigator } from '@react-navigation/stack'
import { INavigation } from '../types'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import themeRouter from './theme'
import Home from '../pages/Home'
import WordAnimation from '../pages/WordAnimation'
import PlayerAnimated from '../pages/PlayerAnimated'
import NumberAnimated from '../pages/NumberAnimated'
import MediumAnimation from '../pages/MediumAnimation'
import InputFindAnimation from '../pages/InputFindAnimation'
import AnimatedHomePageOfNews from '../pages/AnimatedHomePageOfNews'
import AnimatedHomePageOfMovies from '../pages/AnimatedHomePageOfMovies'
import AnimatedHomePageOfImages from '../pages/AnimatedHomePageOfImages'

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
          <Screen name="WordAnimation" component={WordAnimation}/>
          <Screen name="PlayerAnimated" component={PlayerAnimated}/>
          <Screen name="NumberAnimated" component={NumberAnimated}/>
          <Screen name="MediumAnimation" component={MediumAnimation}/>
          <Screen name="InputFindAnimation" component={InputFindAnimation}/>
          <Screen name="AnimatedHomePageOfNews" component={AnimatedHomePageOfNews}/>
          <Screen name="AnimatedHomePageOfMovies" component={AnimatedHomePageOfMovies}/>
          <Screen name="AnimatedHomePageOfImages" component={AnimatedHomePageOfImages}/>
        </Navigator>
      </NavigationContainer>
    </>
  )
}

export default Routes