import axios from 'axios';

const createInstance = axios.create({
    baseURL:process.env.URL_API,
    headers:{
        'Content-Type':'Application;json'
    }
})

export default createInstance