import { useMemo } from "react";
import { ContextData } from "../../types/types";
import { UseCalculeteValueItems, UsegetItemsProducts, UseGetListProducts, UseGetListProdutsById } from "../hooks/hooks";
import {hanhlesaveItensStorage}  from './../../utils/utils'
export default function useMemoHook(){

    const {allproducts, getProducts} = UseGetListProducts();
    const {product, getProduct} = UseGetListProdutsById();
    const {items, getItems} = UsegetItemsProducts()
    const {total, calculateValue} = UseCalculeteValueItems();

    const hookMemo = useMemo<ContextData>(() => ({
        allproducts,
        product,
        items,
        total,
        getItems,
        getProducts,
        getProduct,
        hanhlesaveItensStorage,
        calculateValue
    }) , [
        allproducts, 
        product, 
        items, 
        total,
        getItems, 
        getProducts, 
        getProduct,
        calculateValue
    ])


    return {hookMemo}
}
