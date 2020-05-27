import axios from 'axios'


const config = {
    baseURL: 'http://localhost:8000/',
}

const BaseApi = axios.create(config)

export default BaseApi