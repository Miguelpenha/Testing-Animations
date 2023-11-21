import { INew } from '../type'
import { FC } from 'react'
import usePropsRefreshControl from '../../../hooks/usePropsRefreshControl'
import { FlashList, ListRenderItemInfo } from '@shopify/flash-list'
import { RefreshControl } from 'react-native'
import { FadeInDown } from 'react-native-reanimated'
import { Title } from './style'
import New from './New'

interface Iprops {
    news: INew[]
    getNews: () => Promise<void>
}

const News: FC<Iprops> = ({ getNews, news }) => {
    const propsRefreshControl = usePropsRefreshControl(getNews, 4)

    return (
        <FlashList
            data={news}
            estimatedItemSize={280}
            keyExtractor={(newExtract, index) => String(index)}
            refreshControl={<RefreshControl {...propsRefreshControl}/>}
            ListHeaderComponent={<Title entering={FadeInDown}>Notícias</Title>}
            renderItem={({ item: newRender, index }: ListRenderItemInfo<INew>) => <New index={index} newProp={newRender}/>}
        />
    )
}

export default News