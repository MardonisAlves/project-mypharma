import { useMemo } from "react";
import { ContextData } from "../../types/types";
import { UseGetListProducts } from "../hooks/hooks";

export default function useMemoHook(){
    const {allproducts, getProducts} = UseGetListProducts()
    
    const hookMemo = useMemo<ContextData>(() => ({
        allproducts, 
        getProducts
    }) , [allproducts, getProducts])


    return {hookMemo}
}
