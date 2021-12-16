import axios from 'axios'

const instance = axios.create({
    baseURL: "https://ptnodeaz.herokuapp.com/api"
})

export default instance