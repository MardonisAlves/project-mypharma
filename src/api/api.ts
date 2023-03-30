import createInstance from "./axios.instace";

export async function listProducts(){
    try {
    const {data} = await createInstance.get('/list/product');
    const list = [{
        id:'1',
        name:'Requeijão',
        category:'Laticinios',
        description:'Requeijão cremoso maranguape',
        price:'5,69',
        uploads:{
            id:'1',
            location:'aws url',
            etag:'etag',
            bucket:'test',
            key:'key nome do produto',
            prodid:'1'

        }
    }]
    return list
    } catch (error) {
     return error   
    }
}