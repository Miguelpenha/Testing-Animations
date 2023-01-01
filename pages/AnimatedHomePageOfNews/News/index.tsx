import { INew } from '../type'
import { Dispatch, SetStateAction, FC } from 'react'
import usePropsRefreshControl from '../../../hooks/usePropsRefreshControl'
import getNews from '../getNews'
import { FlatList, RefreshControl, ListRenderItemInfo } from 'react-native'
import { FadeInDown } from 'react-native-reanimated'
import { Title } from './style'
import New from './New'

interface Iprops {
    news: INew[]
    setNews: Dispatch<SetStateAction<INew[]>>
}

const News: FC<Iprops> = ({ news, setNews }) => {
    const propsRefreshControl = usePropsRefreshControl(async () => getNews(setNews), 4)

    return (
        <FlatList
            data={news}
            keyExtractor={(newExtract, index) => String(index)}
            refreshControl={<RefreshControl {...propsRefreshControl}/>}
            ListHeaderComponent={<Title entering={FadeInDown}>Notícias</Title>}
            renderItem={({ item: newRender, index }: ListRenderItemInfo<INew>) => <New index={index} newProp={newRender}/>}
        />
    )
}

export default News