import createInstance from "./axios.instace";

export async function listProducts(){
    try {
    const {data} = await createInstance.get('list/products');
    return  data
    } catch (error) {
     return error   
    }
}


export async function listProdutsById(id:string) {
    try {
     const {data} =  await createInstance.get(`list/product/${id}`);
     return data   
    } catch (error) {
       return error 
    }
}

export async function listCategory(){
    try {
       const {data} = await createInstance.get('list/category') 
       return data
    } catch (error) {
       return error 
    }
}