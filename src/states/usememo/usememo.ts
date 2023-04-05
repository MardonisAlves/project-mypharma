import { useMemo } from "react";
import { ContextData } from "../../types/types";
import {
    UseCalculeteValueItems,
    UseDeleteItemsproducts, 
    UsegetItemsProducts, 
    UseGetListProducts, 
    UseGetListProdutsById, 
    UseListCategory,
    UseFilterProducts
} from "../hooks/hooks";
import {hanhlesaveItensStorage,notificationToast}  from './../../utils/utils'
export default function useMemoHook(){

    const {allproducts, getProducts,setAllproducts} = UseGetListProducts();
    const {product, getProduct} = UseGetListProdutsById();
    const {items, getItems} = UsegetItemsProducts()
    const {total, calculateValue} = UseCalculeteValueItems();
    const {notify} = notificationToast()
    const {deleteItem}  = UseDeleteItemsproducts()
    const {category, getCategory} = UseListCategory()
    const {filter, filterProducts } = UseFilterProducts()


    const hookMemo = useMemo<ContextData>(() => ({
        allproducts,
        product,
        items,
        total,
        category,
        filter,
        getItems,
        getProducts,
        getProduct,
        hanhlesaveItensStorage,
        calculateValue,
        notify,
        deleteItem,
        getCategory,
        filterProducts,
        setAllproducts
    }) , [
        allproducts, 
        product, 
        items, 
        total,
        category,
        filter,
        getItems, 
        getProducts, 
        getProduct,
        calculateValue,
        notify,
        deleteItem,
        getCategory,
        filterProducts,
        setAllproducts

    ])


    return {hookMemo}
}
