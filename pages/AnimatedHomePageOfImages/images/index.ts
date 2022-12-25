import ids from './ids'
import baseURL from './baseURL'

const images: string[] = []

ids.map(id => images.push(`${baseURL}/${id}`))

export default images