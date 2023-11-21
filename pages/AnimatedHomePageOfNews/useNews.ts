import { useState, useEffect } from 'react'
import { INew, INewRaw } from './type'
import tabNews from '../../services/tabNews'

function useNews() {
    const [news, setNews] = useState<INew[]>()

    async function getNews() {
        const { data: newsRaw } = await tabNews.get<INewRaw[]>('/contents')

        newsRaw.map(newRaw => {
            const newAdded: INew = {
                slug: newRaw.slug,
                title: newRaw.title,
                author: newRaw.owner_username,
                published: new Date(newRaw.published_at).toLocaleDateString('pt-br')
            }

            setNews(newsMap => ([...newsMap || [], newAdded]))
        })
    }

    useEffect(() => {
        getNews().then()
    }, [])

    return { news, setNews, getNews }
}

export default useNews