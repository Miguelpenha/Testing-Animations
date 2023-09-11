import { ListRenderItemInfo } from 'react-native'
import { IOption } from './type'
import Option from './Option'

function useRenderItem(find: string) {
    function renderItem({ item: option, index }: ListRenderItemInfo<IOption>) {
        const isInTitle = option.title.toUpperCase().includes(find.toUpperCase())
        const isInPageName = option.page.toUpperCase().includes(find.toUpperCase())
    
        if (isInTitle || isInPageName) {
            return (
                <Option index={index} page={option.page} title={option.title}/>
            )
        }
    }

    return renderItem
}

export default useRenderItem