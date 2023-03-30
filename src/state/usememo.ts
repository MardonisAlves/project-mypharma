import { useMemo } from "react";
import { ContextData } from "../types/types";
import { UseListProducts } from "./hooks";

export default function useMemoHook() {
    const {products, listProductsCallback} = UseListProducts();

    const useMemohook = useMemo<ContextData>(() => ({
    products,
    listProductsCallback
    }), [])

    return {useMemohook}
}

