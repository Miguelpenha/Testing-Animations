import baseUrlApi from './baseUrlApi'

function getThumbnail(author: string, slug: string) {
    const thumbnail = `${baseUrlApi}/contents/${author}/${slug}/thumbnail`

    return thumbnail
}

export default getThumbnail