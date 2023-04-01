import { useMemo } from "react";
import { ContextData } from "../../types/types";
import { UseGetListProducts, UseGetListProdutsById } from "../hooks/hooks";

export default function useMemoHook(){

    const {allproducts, getProducts} = UseGetListProducts();
    const {product, getProduct} = UseGetListProdutsById();

    const hookMemo = useMemo<ContextData>(() => ({
        allproducts,
        product,
        getProducts,
        getProduct
    }) , [allproducts, product, getProducts, getProduct])


    return {hookMemo}
}
