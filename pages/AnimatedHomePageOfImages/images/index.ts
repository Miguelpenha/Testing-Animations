import ids from './ids'
import url from './url'

const images: string[] = []

ids.map(id => images.push(url(id)))

export default images