import { INavigation } from '../../types'

interface IOption {
    title: string
    page: keyof INavigation
}