import { useMemo } from "react";
import { ContextData } from "../../types/types";
import {
    UseCalculeteValueItems,
    UseDeleteItemsproducts, 
    UsegetItemsProducts, 
    UseGetListProducts, 
    UseGetListProdutsById, 
    UseListCategory,
    UseFilterProducts,
    UseFilterLowestPrice
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
    const {lowestprice, getProductsLowestPrice} = UseFilterLowestPrice()

    const hookMemo = useMemo<ContextData>(() => ({
        allproducts,
        product,
        items,
        total,
        category,
        filter,
        lowestprice,
        getItems,
        getProducts,
        getProduct,
        hanhlesaveItensStorage,
        calculateValue,
        notify,
        deleteItem,
        getCategory,
        filterProducts,
        setAllproducts,
        getProductsLowestPrice
    }) , [
        allproducts, 
        product, 
        items, 
        total,
        category,
        filter,
        lowestprice,
        getItems, 
        getProducts, 
        getProduct,
        calculateValue,
        notify,
        deleteItem,
        getCategory,
        filterProducts,
        setAllproducts,
        getProductsLowestPrice

    ])


    return {hookMemo}
}
