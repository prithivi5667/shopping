import axios from 'axios'

const instance = axios.create({
    baseURL: "https://ptnodeaz.herokuapp.com/"
})

export default instance