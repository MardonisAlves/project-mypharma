import { useCallback, useEffect, useState } from "react";
import { listProducts } from "../../api/api";
import { Products } from "../../components/cards/produts.interface";


function UseGetListProducts(){

    const [allproducts, setAllproducts] = useState<Products[]>([]);


    const getProducts = useCallback(async() => {
        const products = await listProducts()
            setAllproducts(products)
    },[setAllproducts])


    useEffect(() => {
        getProducts()
    },[getProducts])

    return {allproducts, getProducts}
}






export {UseGetListProducts}