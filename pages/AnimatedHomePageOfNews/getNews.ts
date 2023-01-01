import { Dispatch, SetStateAction } from 'react'
import { INew, INewRaw } from './type'
import tabNews from '../../services/tabNews'

async function getNews(setNews: Dispatch<SetStateAction<INew[]>>) {
    const { data: newsRaw } = await tabNews.get<INewRaw[]>('/contents')
    const news: INew[] = []

    newsRaw.map(newRaw => {
        news.push({
            slug: newRaw.slug,
            title: newRaw.title,
            author: newRaw.owner_username,
            published: new Date(newRaw.published_at).toLocaleDateString('pt-br')
        })
    })

    setNews(news)
}

export default getNews