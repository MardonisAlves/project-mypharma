import { createContext, ReactNode, useState } from "react";

type ContextData = {
    products:any[]
}

type ProviderProps = {
    children:ReactNode
}

const ContextPharma = createContext({} as ContextData);

const ContextPharmaProvider = ({children}:ProviderProps) => {

    const [products, setProducts] = useState<any[]>([])

    return(
        <ContextPharma.Provider value={{products}}>
            {children}
        </ContextPharma.Provider>
    )
}

export default ContextPharmaProvider