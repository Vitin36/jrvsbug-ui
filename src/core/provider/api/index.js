import axios from 'axios'

const { baseURL } = global.ENVIRONMENT

const config = {
    baseURL: baseURL || 'http://localhost:8000/',
}

const BaseApi = axios.create(config)

export default BaseApi