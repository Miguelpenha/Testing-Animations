const baseURL = 'https://images.unsplash.com'

function url(id: string) {
    return `${baseURL}/${id}?auto=format`
}

export default url