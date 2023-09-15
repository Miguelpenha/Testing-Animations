import { useState, useEffect } from 'react'
import { INew } from './type'
import getNews from './getNews'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import page from './page'
import News from './News'
import Loading from '../../components/Loading'

function AnimatedHomePageOfNews() {
    const [news, setNews] = useState<INew[]>([])

    useEffect(() => {
        getNews(setNews).then()
    }, [])

    return (
        <ContainerPd>
            <HeaderBack page={page}>Página inicial animada de notícias</HeaderBack>
            {news.length > 0 ? 
                <News news={news} setNews={setNews}/>
            : <Loading/>}
        </ContainerPd>
    )
}

export default AnimatedHomePageOfNews