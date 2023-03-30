import createInstance from "./axios.instace";

export async function listProducts(){
    try {
    const {data} = await createInstance.get('/list/product');
    return data
    } catch (error) {
     return error   
    }
}