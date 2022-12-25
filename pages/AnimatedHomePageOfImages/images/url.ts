const baseURL = 'https://images.unsplash.com'

function url(id: string) {
    return `${baseURL}/${id}?auto=compress`
}

export default url