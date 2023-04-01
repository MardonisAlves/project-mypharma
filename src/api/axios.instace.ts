import axios from 'axios';

const createInstance = axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,
    headers:{
        'Content-Type':'Application;json'
    }
})

export default createInstance