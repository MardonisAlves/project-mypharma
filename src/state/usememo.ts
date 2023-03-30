import { useMemo } from "react";
import { ContextData } from "../types/types";


export default function useMemoHook() {

    const useMemohook = useMemo<ContextData>(() => ({
    products:[]  
    }), [])

    return {useMemohook}
}

