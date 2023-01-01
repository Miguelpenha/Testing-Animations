import axios from 'axios'
import baseUrlApi from './baseUrlApi'

const tabNews = axios.create({
    baseURL: baseUrlApi
})

export default tabNews