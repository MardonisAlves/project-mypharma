import { createContext, useState } from "react";
import { ContextData, ProviderProps } from "../types/types";
import useMemoHook from "./usememo";


const ContextPharma = createContext({} as ContextData);

const ContextPharmaProvider = ({children}:ProviderProps) => {
    const {useMemohook} = useMemoHook()

    const [products, setProducts] = useState<any[]>([])

    return(
        <ContextPharma.Provider value={useMemohook}>
            {children}
        </ContextPharma.Provider>
    )
}

export default ContextPharmaProvider