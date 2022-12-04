import { IImage } from '../type'
import { IData } from './type'

function organizeDatas(image: IImage): IData[] {
    const datas = [
        {
            label: 'Música',
            value: image.music
        },
        {
            label: 'Autor',
            value: image.artist
        },
        {
            label: 'Duração',
            value: image.duration
        },
        {
            label: 'Idioma',
            value: image.language
        }
    ]

    if (image.album) {
        datas.push({
            label: 'Álbum',
            value: image.album
        })
    }

    return datas
}

export default organizeDatas