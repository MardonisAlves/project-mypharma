import { useMemo } from "react";
import { ContextData } from "../../types/types";
import { UseCalculeteValueItems, UseDeleteItemsproducts, UsegetItemsProducts, UseGetListProducts, UseGetListProdutsById } from "../hooks/hooks";
import {hanhlesaveItensStorage,notificationToast}  from './../../utils/utils'
export default function useMemoHook(){

    const {allproducts, getProducts} = UseGetListProducts();
    const {product, getProduct} = UseGetListProdutsById();
    const {items, getItems} = UsegetItemsProducts()
    const {total, calculateValue} = UseCalculeteValueItems();
    const {notify} = notificationToast()
    const {deleteItem}  = UseDeleteItemsproducts()

    const hookMemo = useMemo<ContextData>(() => ({
        allproducts,
        product,
        items,
        total,
        getItems,
        getProducts,
        getProduct,
        hanhlesaveItensStorage,
        calculateValue,
        notify,
        deleteItem
    }) , [
        allproducts, 
        product, 
        items, 
        total,
        getItems, 
        getProducts, 
        getProduct,
        calculateValue,
        notify,
        deleteItem
    ])


    return {hookMemo}
}
