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
    UseFilterLowestPrice,
    UseFilterBiggesPrice
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
    const {biggesprice, getProductsBiggesPrice} = UseFilterBiggesPrice()

    const hookMemo = useMemo<ContextData>(() => ({
        allproducts,
        product,
        items,
        total,
        category,
        filter,
        lowestprice,
        biggesprice,
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
        getProductsLowestPrice,
        getProductsBiggesPrice
    }) , [
        allproducts, 
        product, 
        items, 
        total,
        category,
        filter,
        lowestprice,
        biggesprice,
        getItems, 
        getProducts, 
        getProduct,
        calculateValue,
        notify,
        deleteItem,
        getCategory,
        filterProducts,
        setAllproducts,
        getProductsLowestPrice,
        getProductsBiggesPrice

    ])


    return {hookMemo}
}
