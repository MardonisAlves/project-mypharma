import { useCallback, useState } from "react";
import {listProducts} from '../api/api';


export function UseListProducts(){
    const [products, setProducts] = useState<any[]>([])

    const listProductsCallback = useCallback(async() => {
    const list = await listProducts();
    setProducts([list])
    },[])

    return {products, listProductsCallback}

} 