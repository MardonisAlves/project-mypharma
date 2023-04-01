import { useCallback, useEffect, useState } from "react";
import { listProducts, listProdutsById } from "../../api/api";
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


function UseGetListProdutsById(){
    const [product, setAllproduct ] = useState<Products[]>([])
    const getProduct = useCallback(async(id:string) => {
        const productByid = await listProdutsById(id)
        setAllproduct([productByid])
    },[])
    return {product, getProduct}
}


export {UseGetListProducts, UseGetListProdutsById}