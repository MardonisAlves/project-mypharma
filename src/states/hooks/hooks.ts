import { useCallback, useEffect, useState } from "react";
import { listProducts } from "../../api/api";


function UseGetListProducts(){

    const [allproducts, setAllproducts] = useState([]);


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