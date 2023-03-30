import axios from 'axios';

const createInstance = axios.create({
    baseURL:'',
    headers:{
        'Content-Type':'Application;json'
    }
})

export default createInstance