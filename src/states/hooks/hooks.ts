import { useCallback, useEffect, useState } from "react";
import { listProducts, listProdutsById } from "../../api/api";
import { Products } from "../../components/cards/produts.interface";
import { Items } from "../../interfaces/itens.interface";
import { getItemsProduct, calculateValueTotal, deleteItemProduct } from "../../utils/utils";


function UseGetListProducts() {
    const [allproducts, setAllproducts] = useState<Products[]>([]);
    const getProducts = useCallback(async () => {
        const products = await listProducts()
        setAllproducts(products)
    }, [setAllproducts])
    useEffect(() => {
        getProducts()
    }, [getProducts])
    return { allproducts, getProducts }
}


function UseGetListProdutsById() {
    const [product, setAllproduct] = useState<Products[]>([])
    const getProduct = useCallback(async (id: string) => {
        const productByid = await listProdutsById(id)
        setAllproduct([productByid])
    }, [])
    return { product, getProduct }
}


function UsegetItemsProducts() {
    const [items, setItems] = useState<Items[]>([{
        id:"0",
        name:"",
        qtd:0,
        value:0,
        valueitems:0
    }])
    const getItems = useCallback(async () => {
        const listItems = await getItemsProduct()
        setItems(listItems)
    }, [])
    useEffect(() => {
        getItems()
    }, [getItems])
    return { items, getItems }
}


function UseCalculeteValueItems() {
    const [total, setTotal] = useState<number>(0)
    const calculateValue = useCallback(async (items: Items[]) => {
        const total:any = await calculateValueTotal(items)
            setTotal(total) 
    }, [setTotal])
     return {total, calculateValue }
}


function UseDeleteItemsproducts(){
    const deleteItem = useCallback(async(index:number) => {
        console.log(index);
        
         await deleteItemProduct(index)
    },[])

    return {deleteItem}
}


export {
    UseGetListProducts,
    UseGetListProdutsById,
    UsegetItemsProducts,
    UseCalculeteValueItems,
    UseDeleteItemsproducts
}