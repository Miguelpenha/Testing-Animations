export interface IPage {
  url: string
  title: string
  apis?: string[]
  libs?: string[]
  description: string
}

export interface ITheme {
  name: string
  color: string
  primary: string
  secondary: string
  secondaryColor: string
  backgroundColor: string
  backgroundColorSecondary: string
}

export type INavigation = {
  Home: undefined
  WordAnimation: undefined
  PlayerAnimated: undefined
  NumberAnimated: undefined
  MediumAnimation: undefined
  InputFindAnimation: undefined
  AnimatedHomePageOfNews: undefined
  AnimatedHomePageOfMovies: undefined
  AnimatedHomePageOfImages: undefined
}