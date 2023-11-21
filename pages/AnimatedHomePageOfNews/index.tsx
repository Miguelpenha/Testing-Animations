import useNews from './useNews'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import page from './page'
import News from './News'
import Loading from '../../components/Loading'

function AnimatedHomePageOfNews() {
    const { news, getNews } = useNews()

    return (
        <ContainerPd>
            <HeaderBack page={page}>Página inicial animada de notícias</HeaderBack>
            {news && news.length > 0 ? 
                <News news={news} getNews={getNews}/>
            : <Loading/>}
        </ContainerPd>
    )
}

export default AnimatedHomePageOfNews